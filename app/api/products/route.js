import { connectDB } from '@/lib/mongodb';
import Product from '@/models/product';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    const body = req.json();
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
    const product = new Product({
      name,
      image,
      category,
      description,
      price,
      countInStock,
      created_by,
      updated_by,
    });
    const createdProduct = await product.save();
    return NextResponse.json(createdProduct, { status: 201 });
  } catch (error) {
    return NextResponse.error(error);
  }
}
