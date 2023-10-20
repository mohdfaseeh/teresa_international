import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/mongodb.js';
import User from '../../../models/user.js';

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

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.error(error);
  }
}
