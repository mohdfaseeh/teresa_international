import { connectDB } from '@/lib/mongodb';
import Cart from '@/models/cart';
import { NextResponse } from 'next/server';

export async function DELETE(req, { params: { userId } }) {
  try {
    await connectDB();

    const cart = await Cart.findOneAndDelete({ user: userId });

    return NextResponse.json(cart, {
      status: 200,
    });
  } catch (error) {
    console.log('CART_DELETE_ERROR', error);
    return NextResponse.error(error);
  }
}
