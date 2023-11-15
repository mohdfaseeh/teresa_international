import { Button } from '@/components/ui/button';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const Payment = ({ onChange, items, address }) => {
  const { data: user } = useSession();

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  const handlePayment = async () => {
    const stripe = await stripePromise;
    await axios
      .post('/api/checkout', {
        items,
        userId: user?.user?.id,
        address,
      })
      .then(async (res) => {
        stripe.redirectToCheckout({
          sessionId: res.data,
        });
      });
  };
  return (
    <Button onClick={handlePayment} disabled={!address}>
      Payment
    </Button>
  );
};

export default Payment;
