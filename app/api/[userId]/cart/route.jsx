import { connectDB } from '@/lib/mongodb';
import Cart from '@/models/cart';
import Product from '@/models/product';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { userId } }) {
  try {
    await connectDB();

    const cart = await Cart.findOne({ user: userId })
      .populate({
        path: 'user',
        model: User,
      })
      .populate({
        path: 'items.product',
        model: Product,
      });

    return NextResponse.json(cart, {
      status: 200,
    });
  } catch (error) {
    console.log('CART_FETCH_ERROR', error);
    return NextResponse.error(error);
  }
}

export async function POST(req, { params: { userId } }) {
  try {
    const body = await req.json();
    const { productId, quantity } = body;

    await connectDB();

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      const newCart = await Cart.create({
        user: userId,
        items: [
          {
            product: productId,
            quantity,
          },
        ],
      });

      return NextResponse.json(newCart, {
        status: 200,
      });
    }

    const existingProduct = cart.items.find(
      (item) => item.product.toString() === productId
    );

    // console.log('existingProduct', existingProduct);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
      });
    }

    await cart.save();

    return NextResponse.json(cart, {
      status: 200,
    });
  } catch (error) {
    console.log('CART_ADD_ERROR', error);
    return NextResponse.error(error);
  }
}

export async function PUT(req, { params: { userId } }) {
  try {
    const body = await req.json();
    const { productId, quantity } = body;

    await connectDB();

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return NextResponse.error({
        message: 'Cart not found',
      });
    }

    const existingProduct = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingProduct) {
      existingProduct.quantity = quantity;
    }

    await cart.save();

    return NextResponse.json(cart, {
      status: 200,
    });
  } catch (error) {
    console.log('CART_UPDATE_ERROR', error);
    return NextResponse.error(error);
  }
}

export async function DELETE(req, { params: { userId } }) {
  try {
    const body = await req.json();
    const { productId } = body;

    await connectDB();

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return NextResponse.error({
        message: 'Cart not found',
      });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );

    await cart.save();

    return NextResponse.json(cart, {
      status: 200,
    });
  } catch (error) {
    console.log('CART_DELETE_ERROR', error);
    return NextResponse.error(error);
  }
}
