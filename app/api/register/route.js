import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectDB();

    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return NextResponse.json(
        {
          message: 'User already exists',
        },
        { status: 400 }
      );
    }

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json('User created successfully'), { status: 201 };
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
