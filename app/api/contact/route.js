import ContactMessages from '@/models/contact-messages';
import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/mongodb.js';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, phone } = body;

    await connectDB();

    const contactMessage = await ContactMessages.create({
      name,
      email,
      message,
      phone,
    });

    return NextResponse.json(contactMessage, { status: 200 });
  } catch (error) {
    return NextResponse.error(error);
  }
}
