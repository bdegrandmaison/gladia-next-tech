import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    fetch('api/new');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
