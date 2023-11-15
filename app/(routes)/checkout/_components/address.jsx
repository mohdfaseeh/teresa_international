'use client';

import AddressCard from '@/components/addressCard';
import { Button } from '@/components/ui/button';
import useAddressModal from '@/hooks/use-address-modal';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Label } from '@/components/ui/label';
import { useSession } from 'next-auth/react';

const Address = ({ onChange, selected }) => {
  const { data } = useSession();
  const [addresses, setAddresses] = useState([]);
  const addressModal = useAddressModal();

  const fetchAddress = async () => {
    await axios
      .get(`/api/address/${data?.user?.id}`)
      .then((res) => {
        setAddresses(res.data);
        res.data.map((address) => {
          if (address.isDefault) {
            onChange(address);
          }
        });
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
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between w-full">
        <Label className="text-base font-semibold">Select Address</Label>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            addressModal.onOpen();
          }}
        >
          Add New Address
        </Button>
      </div>
      {addresses.map((address) => (
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
          // onSetDefault={() =>
          //   handleSetDefault(address?._id, address?.isDefault)
          // }
          onClick={() => {
            handleSetDefault(address?._id, address?.isDefault);
            onChange(address);
          }}
          showDefault={false}
          selected={address?.isDefault}
        />
      ))}
    </div>
  );
};

export default Address;
