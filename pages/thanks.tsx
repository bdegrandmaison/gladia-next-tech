import { GetServerSideProps } from 'next';
import { withSessionSsr } from '../lib/session';
import { UserWithoutPassword } from '../interfaces';
import { fetchUserSession } from '../lib/fetchUserSession';
import Container from '../components/Layout/Container';

export const getServerSideProps: GetServerSideProps = withSessionSsr(async (ctx) => {
  const user = await fetchUserSession(ctx);
  return { props: { user } };
});

const PaymentSuccess = ({ user }: { user: UserWithoutPassword | null }) => {
  return (
    <Container title="Thank you for choosing Gladia" user={user || null}>
      <div>
        <h1 className="text-center">Your payment was successful</h1>
        <p className="text-center">Thank you for choosing Gladia</p>
      </div>
    </Container>
  );
};

export default PaymentSuccess;
