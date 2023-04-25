import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useLogin } from '../hooks/useLogin';
import Container from '../components/Layout/Container';
import { fetchUserSession } from '../lib/fetchUserSession';
import { GetServerSideProps } from 'next';
import { withSessionSsr } from '../lib/session';
import { UserWithoutPassword } from '../interfaces';

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

const LoginPage = ({ user }: { user: UserWithoutPassword | null }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const postLoginDetails = useLogin({ username, password });

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postLoginDetails.mutate(null, {
      onSuccess: () => {
        router.push('/');
      },
    });
  };

  return (
    <Container title="Gladia, login page" user={user || null}>
      <div className="container">
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {postLoginDetails.error && (
            <div>
              <p>Bad Credentials. Please try again</p>
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={postLoginDetails.isLoading || !username || !password}
          >
            {postLoginDetails.isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
