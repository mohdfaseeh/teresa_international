import { NextResponse } from 'next/server';

export async function POST({ req }) {
  try {
    const body = await req.json();
    // const { user } = body;

    // console.log('user', user);

    return NextResponse.json('addresses is required', { status: 200 });
  } catch (error) {
    return NextResponse.error(error);
  }
}
