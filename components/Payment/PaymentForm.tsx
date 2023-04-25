import { CSSProperties, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCreatePayment } from '../../hooks/useCreatePayment';
import { StripeCardElementOptions } from '@stripe/stripe-js';
import { Button } from 'reactstrap';
import { useUser } from '../../context/UserContext';

const cardContainerStyle: CSSProperties = {
  width: '30rem',
  margin: '4rem auto',
  backgroundColor: '#0A2540',
  borderRadius: '2rem',
  padding: '2rem',
};

const cardStyle: StripeCardElementOptions = {
  style: {
    base: {
      color: 'white',
      iconColor: '#EFC078',
      backgroundColor: '#0A2540',
      fontFamily: 'Sohne, system-ui, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#727F96',
      },
    },
    invalid: {
      fontFamily: 'Sohne, system-ui, sans-serif',
      color: '#fe87a1',
      iconColor: '#fe87a1',
    },
  },
};

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { user } = useUser();
  const createPaymentMutation = useCreatePayment({ userId: user.id });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      createPaymentMutation.mutate(
        { userId: user.id },
        {
          onSuccess: () => {
            router.push('/thanks');
          },
          onError: (error) => {
            setErrorMessage(error.message);
          },
        },
      );
    }
  };

  return (
    <div>
      <h1 className="text-center">Payment</h1>
      <form onSubmit={handleSubmit} style={cardContainerStyle}>
        <br />
        <div></div>
        <CardElement options={cardStyle} />
        <br />
        <Button type="submit" disabled={!stripe} className="d-block mx-auto my-0">
          Pay
        </Button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
};
