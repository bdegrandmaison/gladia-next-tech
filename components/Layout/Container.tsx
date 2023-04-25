import Layout from '.';
import { UserWithoutPassword } from '../../interfaces';
import { ReactNode } from 'react';
import { UserProvider } from '../../context/UserContext';

type ContainerProps = {
  children: ReactNode;
  user?: UserWithoutPassword | null;
  title?: string;
};

const Container = ({ user, children, title }: ContainerProps) => {
  return (
    <UserProvider value={user}>
      <Layout title={title}>{children}</Layout>
    </UserProvider>
  );
};

export default Container;
