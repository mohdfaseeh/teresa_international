import { connectDB } from '@/lib/mongodb';
import Address from '@/models/address';
import { NextResponse } from 'next/server';

export async function GET(req, { params: { userId } }) {
  try {
    await connectDB();

    const address = await Address.find({ user_id: userId }).populate('user_id');
    return NextResponse.json(address, {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json(e, {
      status: 500,
    });
  }
}

export async function POST(req, { params: { userId } }) {
  try {
    const body = await req.json();

    const {
      name,
      address,
      phone,
      city,
      state: stateOrProvince,
      country,
      pincode: postalCode,
      locality,
      isDefault,
      type,
    } = body;
    await connectDB();

    const addresses = await Address.create({
      name,
      address,
      phone,
      city,
      stateOrProvince,
      country,
      postalCode,
      locality,
      isDefault,
      type,
      user_id: userId,
    });
    return NextResponse.json(addresses, {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json(e, {
      status: 500,
    });
  }
}

export async function PUT(req, { params: { userId } }) {
  try {
    const body = await req.json();

    const {
      name,
      address,
      phone,
      city,
      state: stateOrProvince,
      country,
      pincode: postalCode,
      locality,
      isDefault,
      type,
      _id,
    } = body;
    await connectDB();

    if (isDefault) {
      await Address.updateMany(
        { user_id: userId },
        {
          isDefault: false,
        }
      );
    }

    const addresses = await Address.updateOne(
      { user_id: userId, _id: _id },
      {
        name,
        address,
        phone,
        city,
        stateOrProvince,
        country,
        postalCode,
        locality,
        isDefault,
        type,
        user_id: userId,
      }
    );
    return NextResponse.json(addresses, {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json(e, {
      status: 500,
    });
  }
}

export async function DELETE(req, { params: { userId } }) {
  try {
    const body = await req.json();

    const { id } = body;
    await connectDB();

    const address = await Address.findOne({ _id: id });

    if (address.isDefault) {
      await Address.updateOne(
        { user_id: userId },
        {
          isDefault: true,
        }
      );
    }
    const addresses = await Address.deleteOne({ _id: id });

    return NextResponse.json(addresses, {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json(e, {
      status: 500,
    });
  }
}
