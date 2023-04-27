import { GetServerSideProps } from 'next';
import { withSessionSsr } from '../lib/session';
import { UserWithoutPassword } from '../interfaces';
import { fetchUserSession } from '../lib/fetchUserSession';
import Container from '../components/Layout/Container';
import { SignupForm } from '../components/SignUp';

export const getServerSideProps: GetServerSideProps = withSessionSsr(async (ctx) => {
  const user = await fetchUserSession(ctx);
  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: {} };
});

const SignUp = ({ user }: { user: UserWithoutPassword | null }) => {
  return (
    <Container title="Gladia sign-up page" user={user || null}>
      <SignupForm />
    </Container>
  );
};

export default SignUp;
