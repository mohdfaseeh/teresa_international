'use client';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import useAddressModal from '@/hooks/use-address-modal';
import banner from '@/public/download.jpeg';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import AddressCard from './addressCard';

const AddressPage = () => {
  const addressModal = useAddressModal();
  const { data } = useSession();
  const [addresses, setAddresses] = useState([]);

  const fetchAddress = async () => {
    if (!data?.user?.id) return;
    await axios
      .get(`/api/address/${data?.user?.id}`)
      .then((res) => {
        setAddresses(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAddress();
  }, [data]);

  const handleSetDefault = async (id, isDefault) => {
    await axios
      .put(`/api/address/${data?.user?.id}`, {
        _id: id,
        isDefault: !isDefault,
      })
      .then((res) => {
        fetchAddress();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`/api/address/${data?.user?.id}`, {
        data: {
          id,
        },
      })
      .then((res) => {
        fetchAddress();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="relative h-72 w-full">
        <Image src={banner} alt="address" className="w-full h-72" />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold text-white uppercase">
          Address
        </h2>
      </div>
      <div className="pt-10 flex flex-col gap-2 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Saved Addresses</h2>
          <Button
            className="bg-primary text-white"
            onClick={addressModal.onOpen}
          >
            Add New Address
          </Button>
        </div>

        {addresses?.map((address) => (
          <AddressCard
            key={address?.id}
            address={{
              name: address?.name,
              phone: address?.phone,
              address: address?.address,
              city: address?.city,
              state: address?.stateOrProvince,
              pincode: address?.postalCode,
              locality: address?.locality,
              default: address?.isDefault,
            }}
            onEdit={() => {
              addressModal.onOpenWithData(address);
            }}
            onDelete={() => handleDelete(address?._id)}
            onSetDefault={() =>
              handleSetDefault(address?._id, address?.isDefault)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default AddressPage;
