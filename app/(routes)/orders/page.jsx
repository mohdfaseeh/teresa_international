'use client';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import OrderCard from './_component/orderCard';

const OrderPage = () => {
  const router = useRouter();
  const { data: user } = useSession();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    if (!user?.user?.id) {
      return;
    }
    await axios
      .get(`api/${user?.user?.id}/orders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, [user]);

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        No orders yet!
        <Button
          className="rounded-full"
          variant="outline"
          onClick={() => router.push('/shop')}
        >
          Shop now
        </Button>
      </div>
    );
  }
  return (
    <div className="mt-20 min-h-screen w-full px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      <div className="flex flex-col gap-4 items-center  w-full ">
        {orders.map((order) => (
          <OrderCard
            key={order._id}
            orders={order.orderItems}
            shippingAddress={order.shippingAddress}
            id={order._id}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
