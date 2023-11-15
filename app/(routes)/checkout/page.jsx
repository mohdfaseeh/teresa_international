'use client';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Dialog } from '@radix-ui/react-dialog';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Address from './_components/address';
import Payment from './_components/payment';

const steps = [
  { id: 1, name: 'Address' },
  { id: 2, name: 'Payment' },
  { id: 3, name: 'Confirmation' },
];
const CheckoutPage = () => {
  const router = useRouter();
  const { data: user } = useSession();
  const [currentStep, setCurrentStep] = useState(1);
  const [address, setAddress] = useState();
  const [payment, setPayment] = useState();
  const [confirmation, setConfirmation] = useState();
  const [cartItems, setCartItems] = useState();
  const [successModal, setSuccessModal] = useState(false);
  const [timer, setTimer] = useState(5);

  const params = useSearchParams();

  useEffect(() => {
    if (params.get('success')) {
      deleteCartItem();
      setSuccessModal(true);
    }
    if (params.get('cancel')) {
      console.log('Something went wrong');
    }
  }, [params, user?.user?.id]);

  useEffect(() => {
    if (successModal) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 0) {
            clearInterval(interval);
            router.push('/orders');
          }
          return prev > 0 ? prev - 1 : 0;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [successModal]);

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

  const deleteCartItem = async () => {
    if (!user?.user?.id) return;
    await axios
      .delete(`api/${user?.user?.id}/cart/delete`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchCartItems();
  }, [user?.user?.id]);

  if (cartItems && cartItems.length === 0) {
    router.push('/shop');
  }

  return (
    <div className="mt-20 min-h-screen w-full flex  px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      <div className="w-full">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold text-gray-900">Checkout</h1>
        </div>
        <div className="flex flex-col mt-8 w-full">
          {/* <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={currentStep}
          >
            <AccordionItem value={1} disabled={currentStep < 1}>
              <AccordionTrigger className="flex items-center justify-between w-full">
                Address
              </AccordionTrigger>
              <AccordionContent>
                <Address
                  onChange={(e) => {
                    setAddress(e);
                    setCurrentStep((prev) => {
                      return prev + 1;
                    });
                  }}
                  selected={address}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={2} disabled={currentStep < 2}>
              <AccordionTrigger className="flex items-center justify-between w-full">
                Mode of Payment
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion> */}
          <div className="flex flex-col w-full">
            <Address
              onChange={(e) => {
                setAddress(e);
                setCurrentStep((prev) => {
                  return prev + 1;
                });
              }}
              selected={address}
            />
          </div>
          <div className="flex items-center justify-end w-full">
            <Payment
              onChange={(e) => {
                setPayment(e);
                setCurrentStep((prev) => {
                  return prev + 1;
                });
              }}
              items={cartItems}
              address={address}
            />
          </div>
        </div>
      </div>
      <Dialog open={successModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col items-center justify-center">
                <Image src="/7efs.gif" alt="success" width={400} height={400} />
                Congratulations your order has been placed successfully. you
                will be redirected to order page in {timer} seconds.
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CheckoutPage;
