'use client';
import Image from 'next/image';

import banner from '@/public/download.jpeg';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import AddressCard from './addressCard';

const AddressPage = () => {
  const { data } = useSession();

  const fetchAddress = async () => {
    if (!data?.user?.id) return;
    await axios
      .post(`/api/address/get-one`, {
        user: data?.user?.id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAddress();
  }, [data]);

  return (
    <div className="pt-16 min-h-screen">
      <div className="relative h-72 w-full">
        <Image src={banner} alt="address" className="w-full h-72" />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold text-white uppercase">
          Address
        </h2>
      </div>
      <div className="pt-10 flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
        <AddressCard
          address={{
            name: 'Fasseh Mohd',
            phone: '1234567890',
            address:
              '123, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            city: 'Hyderabad',
            state: 'Telangana',
            pincode: '500001',
            locality:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            default: true,
          }}
          onEdit={() => {}}
          onDelete={() => {}}
          onSetDefault={() => {}}
        />
      </div>
    </div>
  );
};

export default AddressPage;
