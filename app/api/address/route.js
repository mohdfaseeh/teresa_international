import { connectDB } from '@/lib/mongodb';
import Address from '@/models/address';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      user,
      name,
      address,
      phone,
      city,
      stateOrProvince,
      country,
      postalCode,
      locality,
    } = body;

    await connectDB();

    if (!user) {
      return NextResponse.json('User is required', { status: 400 });
    }

    if (!name) {
      return NextResponse.json('Name is required', { status: 400 });
    }

    if (!address) {
      return NextResponse.json('Address is required', { status: 400 });
    }

    if (!phone) {
      return NextResponse.json('Phone is required', { status: 400 });
    }

    if (!city) {
      return NextResponse.json('City is required', { status: 400 });
    }

    if (!stateOrProvince) {
      return NextResponse.json('State or Province is required', {
        status: 400,
      });
    }

    if (!country) {
      return NextResponse.json('Country is required', { status: 400 });
    }

    if (!postalCode) {
      return NextResponse.json('Postal Code is required', { status: 400 });
    }

    if (!locality) {
      return NextResponse.json('Locality is required', { status: 400 });
    }

    const checkAddress = await Address.findOne({
      user,
    });

    let isDefault = false;
    if (!checkAddress) {
      isDefault = true;
    }

    const createdAddress = await Address.create({
      user,
      name,
      address,
      phone,
      city,
      stateOrProvince,
      country,
      postalCode,
      locality,
      isDefault,
    });

    return NextResponse.json(createdAddress, { status: 200 });
  } catch (error) {
    return NextResponse.error(error);
  }
}
