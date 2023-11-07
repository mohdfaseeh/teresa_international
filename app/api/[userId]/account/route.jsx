import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(req, { params: { userId } }) {
  try {
    const body = await req.json();
    const { name } = body;

    await connectDB();

    const user = await User.findOneAndUpdate(
      { _id: userId },
      { name },
      { new: true }
    );

    return NextResponse.json('password updated successfully!', { status: 200 });
  } catch (error) {
    return NextResponse.error(error);
  }
}
