import { GetServerSideProps } from 'next';
import { withSessionSsr } from '../lib/session';
import { UserWithoutPassword } from '../interfaces';
import { fetchUserSession } from '../lib/fetchUserSession';
import Container from '../components/Layout/Container';
import { Choice } from '../components/Transcription/Choice';

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

const Transcribe = ({ user }: { user: UserWithoutPassword | null }) => {
  return (
    <Container title="Gladia transcript" user={user || null}>
      <Choice />
    </Container>
  );
};

export default Transcribe;
