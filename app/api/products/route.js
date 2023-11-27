import { connectDB } from '@/lib/mongodb';
import Product from '@/models/product';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    const body = await req.json();
    const {
      name,
      image,
      category,
      description,
      price,
      countInStock,
      created_by,
      updated_by,
    } = body;

    await connectDB();
    const product = await Product.create({
      name,
      image,
      slug: name.toLowerCase().replace(/ /g, '-'),
      category,
      description,
      price,
      countInStock,
      created_by,
      updated_by,
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}

export async function GET(req, res) {
  try {
    await connectDB();
    const products = await Product.find({
      status: 'active',
      countInStock: { $gt: 0 },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
