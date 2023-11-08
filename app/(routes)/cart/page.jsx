'use client';
import CartItem from '@/components/cart-item';
import { Button } from '@/components/ui/button';
import { formatter } from '@/lib/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CartPage = () => {
  const { data: user } = useSession();
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();
  const deliverCharges = 100;

  const fetchCartItems = async () => {
    if (!user?.user?.id) return;
    await axios
      .get(`api/${user?.user?.id}/cart`)
      .then((res) => {
        setCartItems(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleIncrement = async (id) => {
    if (!user?.user?.id) return;
    await axios
      .put(`api/${user?.user?.id}/cart`, {
        productId: id,
        quantity:
          cartItems.find((item) => item.product._id === id).quantity + 1,
      })
      .then((res) => {
        router.refresh();
        fetchCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDecrement = async (id) => {
    if (!user?.user?.id) return;
    await axios
      .put(`api/${user?.user?.id}/cart`, {
        productId: id,
        quantity:
          cartItems.find((item) => item.product._id === id).quantity - 1,
      })
      .then((res) => {
        router.refresh();
        fetchCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = async (id) => {
    if (!user?.user?.id) return;
    await axios
      .delete(`api/${user?.user?.id}/cart`, {
        data: {
          productId: id,
        },
      })
      .then((res) => {
        router.refresh();
        fetchCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, [user]);

  if (cartItems.length === 0)
    return (
      <div className="mt-20 min-h-screen w-full flex items-center justify-center px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl">Your cart is empty</h2>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => {
              router.push('/shop');
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    );

  return (
    <div className="mt-20 h-full w-full flex items-center justify-center px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 w-full">
        <div className="col-span-2 rounded-md flex flex-col gap-2">
          {cartItems.map((item) => (
            <CartItem
              key={1}
              title={item.product.name}
              price={1000}
              image={item.product.image[0] || ''}
              quantity={item.quantity}
              id={item.product._id}
              slug={item.product.slug}
              onIncrement={() => handleIncrement(item.product._id)}
              onDecrement={() => handleDecrement(item.product._id)}
              onRemove={() => handleRemove(item.product._id)}
            />
          ))}
        </div>
        <div className="flex flex-col col-span-1 gap-4 rounded-md border p-4 text-base h-max">
          <h2 className="text-lg">Price Details</h2>
          <hr />
          <div className="flex justify-between">
            <span>Price ({cartItems?.length} items)</span>
            <span>
              {formatter.format(
                cartItems?.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                )
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>{formatter.format(deliverCharges)}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Total</span>
            <span>
              {formatter.format(
                cartItems?.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                ) + deliverCharges
              )}
            </span>
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
