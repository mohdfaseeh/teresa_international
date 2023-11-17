import { connectDB } from '@/lib/mongodb';
import Order from '@/models/order';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { userId, orderId } }) {
  try {
    await connectDB();

    const order = await Order.findOne({ _id: orderId, user: userId })
      .populate({
        path: 'user',
        model: 'User',
      })
      .populate({
        path: 'orderItems.product',
        model: 'Product',
      })
      .populate({
        path: 'shippingAddress',
        model: 'Address',
      });

    return NextResponse.json(order, {
      status: 200,
    });
  } catch (err) {
    console.log('ORDERS_FETCH_ERROR', err);
    return NextResponse.error(err);
  }
}

export async function PUT(req, { params: { userId, orderId } }) {
  try {
    await connectDB();

    const body = await req.json();
    const order = await Order.findOneAndUpdate(
      { _id: orderId, user: userId },
      body,
      {
        new: true,
      }
    );

    return NextResponse.json(order, {
      status: 200,
    });
  } catch (err) {
    console.log('ORDERS_UPDATE_ERROR', err);
    return NextResponse.error(err);
  }
}
