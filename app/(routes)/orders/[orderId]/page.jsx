'use client';
import { Button } from '@/components/ui/button';
import { formatter } from '@/lib/utils';
import axios from 'axios';
import { Home } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const OrderStatusPage = ({ params: { orderId } }) => {
  const { data: user } = useSession();
  const [order, setOrder] = useState();
  const router = useRouter();

  const [deliveryStatusSteps, setDeliveryStatusSteps] = useState([
    {
      name: 'Pending',
      description: 'We will process your order soon',
    },
    {
      name: 'Processing',
      description: 'We are processing your order',
    },
    {
      name: 'Shipped',
      description: 'Your order has been shipped',
    },
    {
      name: 'Out for Delivery',
      description: 'Your order is out for delivery',
    },
    {
      name: 'Delivered',
      description: 'Your order has been delivered',
    },
    {
      name: 'Cancelled',
      description: 'Your order has been cancelled',
    },
    {
      name: 'Returned',
      description: 'Your order has been returned',
    },
    {
      name: 'Refunded',
      description: 'Your order has been refunded',
    },
    {
      name: 'Failed',
      description: 'Your order has failed',
    },
  ]);
  const fetchOrder = async () => {
    if (!user?.user?.id) {
      return;
    }
    await axios
      .get(`/api/${user?.user?.id}/orders/${orderId}`)
      .then((res) => {
        if (res) setOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchOrder();
  }, [user?.user?.id]);

  const handleCancelOrder = async () => {
    await axios
      .put(`/api/${user?.user?.id}/orders/${orderId}`, {
        deliveryStatus: 'Cancelled',
      })
      .then((res) => {
        if (res) {
          fetchOrder();
          router.refresh();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-20 min-h-screen flex flex-col gap-4 w-full px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-4 w-full border-b p-2">
          <h2 className="text-base">Order ID - {orderId}</h2>
        </div>
        <div className="flex flex-col gap-4 items-center  w-full shadow-md">
          {order?.orderItems.map((order) => (
            <div
              key={order._id}
              className="flex flex-col gap-4 p-4  w-full border-b
          "
            >
              <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-4 items-center justify-between flex-col">
                  <p
                    className="text-lg cursor-pointer"
                    onClick={() => router.push(`/shop/${order.product.slug}`)}
                  >
                    {order.product.name}
                  </p>
                  <p className="text-lg">
                    {formatter.format(order.product.price)}
                  </p>
                </div>
                <img
                  src={order.product.image && order.product.image[0]}
                  alt={order.product.name}
                  className="w-24 h-24"
                />
              </div>
            </div>
          ))}
          {(order?.deliveryStatus === 'Processing' ||
            order?.deliveryStatus === 'Pending') && (
            <div className="flex items-center justify-end p-4 pt-0 w-full">
              <Button variant="destructive" onClick={handleCancelOrder}>
                Cancel Order
              </Button>
            </div>
          )}
        </div>
      </div>
      {/*
        Shipping Address
      */}

      <div className="flex flex-col gap-4 w-full p-2 shadow-md">
        <div className="flex gap-4 items-center justify-between border-b p-2">
          <h2 className="text-base text-muted-foreground">Shipping Address</h2>
        </div>
        <div className="flex p-4 gap-2 w-full">
          <Home className="w-6 h-6 text-muted-foreground" />

          <div className="flex flex-col">
            <p className="text-sm">{order?.shippingAddress?.name}</p>
            <p className="text-sm">
              {order?.shippingAddress?.address}
              {','}
              <span className="text-sm">{order?.shippingAddress?.city}</span>
              {','}
              <span className="text-sm">
                {order?.shippingAddress?.postalCode}
              </span>
            </p>
            <p className="text-sm">{order?.shippingAddress?.phone}</p>
          </div>
        </div>
      </div>

      {/*
        Order Status
        */}

      <div className="flex flex-col gap-4 w-full p-2 shadow-md">
        <div className="flex gap-4 items-center justify-between border-b p-2">
          <h2 className="text-base text-muted-foreground">Order Status</h2>
        </div>
        <div className="flex flex-col gap-4 p-4  w-full ">
          {deliveryStatusSteps
            .filter((step) => step.name === order?.deliveryStatus)
            .map((step) => (
              <div
                className="flex flex-col gap-4 p-4  w-full
                "
              >
                <div className="flex gap-2 items-center justify-between flex-col">
                  <p className="text-lg">{step.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrderStatusPage;
