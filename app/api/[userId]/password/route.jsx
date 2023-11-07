import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
export async function POST(req, { params: { userId } }) {
  try {
    const body = await req.json();
    const { current, new: newPassword } = body;
    await connectDB();

    const user = await User.findById(userId);

    const isCorrect = await bcrypt.compare(current, user.password);

    if (!isCorrect) {
      return NextResponse.json('incorrect password', { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await User.findOneAndUpdate(
      { _id: userId },
      { password: hashedPassword },
      { new: true }
    );

    return NextResponse.json('password updated successfully!', { status: 200 });
  } catch (error) {
    return NextResponse.error(error);
  }
}
