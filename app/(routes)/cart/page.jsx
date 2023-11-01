'use client';
import CartItem from '@/components/cart-item';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const CartPage = () => {
  const { data: user } = useSession();

  const fetchCartItems = async () => {
    if (!user?.user?.id) return;
    await axios.get(`api/${user?.user?.id}/cart`).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    fetchCartItems();
  });

  return (
    <div className="mt-20 h-full w-full flex items-center justify-center px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 w-full">
        <div className="col-span-2 rounded-md flex flex-col gap-2">
          {/* {useCart?.items?.map((item) => ( */}
          <CartItem
            key={1}
            title={'Teresa International'}
            // image={}
            price={1000}
            quantity={1}
            id={1}
            onIncrement={() => {}}
            onDecrement={() => {}}
            onRemove={() => {}}
          />
          {/* ))} */}
        </div>
        <div className="flex flex-col col-span-1 gap-4 rounded-md border p-4 text-base h-max">
          <h2 className="text-lg">Price Details</h2>
          <hr />
          <div className="flex justify-between">
            <span>Price (1 item)</span>
            <span>₹ 1000</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>₹ 100</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Total</span>
            <span>₹ 1100</span>
          </div>
          <hr />

          <button className="bg-primary text-white w-full py-2 rounded-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
