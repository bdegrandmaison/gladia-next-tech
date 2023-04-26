import { GetServerSideProps } from 'next';
import { Button } from 'reactstrap';
import { useRouter } from 'next/router';
import { withSessionSsr } from '../lib/session';
import { UserWithoutPassword } from '../interfaces';
import { fetchUserSession } from '../lib/fetchUserSession';
import Container from '../components/Layout/Container';

const transcribeButtonStyle = {
  width: '15em',
  margin: ' 2em auto 0.5em',
  display: 'block',
};

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
  if (user && !user.hasPaid) {
    return {
      redirect: {
        destination: '/pay',
        permanent: false,
      },
    };
  }
  return { props: { user } };
});

const PaymentSuccess = ({ user }: { user: UserWithoutPassword | null }) => {
  const router = useRouter();
  return (
    <Container title="Thank you for choosing Gladia" user={user || null}>
      <div>
        <h1 className="text-center">Your payment was successful</h1>
        <p className="text-center">Thank you for choosing Gladia</p>
      </div>
      <Button
        color="primary"
        style={transcribeButtonStyle}
        onClick={() => router.push('/transcribe')}
      >
        Go to transcription page
      </Button>
    </Container>
  );
};

export default PaymentSuccess;
