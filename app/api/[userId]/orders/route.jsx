import { connectDB } from '@/lib/mongodb';
import Address from '@/models/address';
import Order from '@/models/order';
import Product from '@/models/product';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { userId } }) {
  try {
    await connectDB();

    const orders = await Order.find({ user: userId })
      .populate({
        path: 'user',
        model: User,
      })
      .populate({
        path: 'orderItems.product',
        model: Product,
      })
      .populate({
        path: 'shippingAddress',
        model: Address,
      })
      .sort({ createdAt: -1 });

    return NextResponse.json(orders, {
      status: 200,
    });
  } catch (error) {
    console.log('ORDERS_FETCH_ERROR', error);
    return NextResponse.error(error);
  }
}
