import { connectDB } from '@/lib/mongodb';
import Product from '@/models/product';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { productSlug } }) {
  try {
    await connectDB();

    const product = await Product.findOne({ slug: productSlug });

    return NextResponse.json(product, {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.error(err);
  }
}
