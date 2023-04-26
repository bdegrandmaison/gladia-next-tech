import { GetServerSideProps } from 'next';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { fetchUserSession } from '../lib/fetchUserSession';
import { withSessionSsr } from '../lib/session';
import Container from '../components/Layout/Container';
import { UserWithoutPassword } from '../interfaces';
import { PaymentForm } from '../components/Payment/PaymentForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export const getServerSideProps: GetServerSideProps = withSessionSsr(async (ctx) => {
  const user = await fetchUserSession(ctx);
  if (!user || (user && !user.isLoggedIn)) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return { props: { user } };
});

const Pay = ({ user }: { user: UserWithoutPassword | null }) => (
  <Container title="Gladia payment page" user={user || null}>
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  </Container>
);

export default Pay;
