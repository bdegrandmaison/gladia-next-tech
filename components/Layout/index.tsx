import { ReactNode } from 'react';
import Head from 'next/head';
import { NavigationBar } from '../Nav/NavigationBar';
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ title = 'Gladia tech assessment', children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <NavigationBar />
      </header>
      {children}
    </>
  );
};

export default Layout;
