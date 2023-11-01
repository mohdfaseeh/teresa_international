import { connectDB } from '@/lib/mongodb';
import Cart from '@/models/cart';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { userId } }) {
  try {
    await connectDB();

    const cart = await Cart.findOne({ user: userId });

    // cart.items = await Promise.all(
    //   cart.items.map(async (item) => {
    //     const product = await Product.find({});
    //     return {
    //       _id: item._id,
    //       product,
    //       quantity: item.quantity,
    //     };
    //   })
    // );

    return NextResponse.json(cart, {
      status: 200,
    });
  } catch (error) {
    console.log('CART_FETCH_ERROR', error);
    return NextResponse.error(error);
  }
}

export async function POST(req, { params: { userId } }) {
  try {
    const { productId, quantity } = req.body;

    await connectDB();

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      const newCart = await Cart.create({
        user: userId,
        items: [
          {
            product: productId,
            quantity,
          },
        ],
      });

      return NextResponse.json(newCart, {
        status: 200,
      });
    }

    const existingProduct = cart.items.find(
      (item) => item._id.toString() === productId
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
      });
    }

    await cart.save();

    return NextResponse.json(cart, {
      status: 200,
    });
  } catch (error) {
    console.log('CART_ADD_ERROR', error);
    return NextResponse.error(error);
  }
}

export async function PUT(req, { params: { userId } }) {
  try {
    const { productId, quantity } = req.body;

    await connectDB();

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return NextResponse.error({
        message: 'Cart not found',
      });
    }

    const existingProduct = cart.items.find(
      (item) => item._id.toString() === productId
    );

    if (existingProduct) {
      existingProduct.quantity = quantity;
    }

    await cart.save();

    return NextResponse.json(cart, {
      status: 200,
    });
  } catch (error) {
    console.log('CART_UPDATE_ERROR', error);
    return NextResponse.error(error);
  }
}

export async function DELETE(req, { params: { userId } }) {
  try {
    const { productId } = req.body;

    await connectDB();

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return NextResponse.error({
        message: 'Cart not found',
      });
    }

    cart.items = cart.items.filter((item) => item._id.toString() !== productId);

    await cart.save();

    return NextResponse.json(cart, {
      status: 200,
    });
  } catch (error) {
    console.log('CART_DELETE_ERROR', error);
    return NextResponse.error(error);
  }
}
