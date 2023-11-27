import { connectDB } from '@/lib/mongodb';
import Order from '@/models/order';
import Product from '@/models/product';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const body = await req.json();
    const { userId, items, address } = body;

    if (!userId) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    if (!items) {
      return NextResponse.json({ message: 'Items not found' }, { status: 404 });
    }
    if (!address) {
      return NextResponse.json(
        { message: 'Address not found' },
        { status: 404 }
      );
    }

    const extractingItems = await items.map((item) => {
      // check if the product is available in stock from the database
      const product = Product.findById(item.product._id);
      if (!product) {
        return NextResponse.json(
          { message: 'Product not found' },
          { status: 404 }
        );
      }

      // check if the product quantity is available in stock

      if (product.countInStock < item.quantity) {
        return NextResponse.json(
          { message: 'Product not available in stock' },
          { status: 404 }
        );
      }

      return {
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.product.name,
            images: [...item.product.image],
            description: item.product.description,
          },
          unit_amount: item.product.price * 100,
        },
        quantity: item.quantity,
      };
    });

    await connectDB();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: extractingItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout?cancel=true`,
      metadata: {
        userId,
      },
    });

    const order = await Order.create({
      user: userId,
      orderItems: [
        ...items.map((item) => ({
          quantity: item.quantity,
          product: item.product._id,
        })),
      ],
      shippingAddress: address._id,
      paymentMethod: 'Stripe',
      paymentId: session.id,
    });

    // update the product quantity

    items?.forEach(async (item) => {
      const product = await Product.findByIdAndUpdate(
        item.product._id,
        {
          $inc: { countInStock: -item.quantity },
        },
        { new: true }
      );
    }) ?? [];

    return NextResponse.json(session?.id, { status: 200 });
  } catch (err) {
    console.log('CHECKOUT_URL', err);
    return NextResponse.error(err);
  }
}
