import { GetServerSideProps } from 'next';
import Container from '../components/Layout/Container';
import HeroSection from '../components/Home/HeroSection';
import { fetchUserSession } from '../lib/fetchUserSession';
import { withSessionSsr } from '../lib/session';
import { UserWithoutPassword } from '../interfaces';

export const getServerSideProps: GetServerSideProps = withSessionSsr(async (ctx) => {
  const user = await fetchUserSession(ctx);
  return { props: { user } };
});

const IndexPage = ({ user }: { user: UserWithoutPassword | null }) => (
  <Container title="Welcome to Gladia" user={user || null}>
    <HeroSection />
  </Container>
);

export default IndexPage;
