import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { browserGraphQl } from '../clients/browserGraphQl.client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={browserGraphQl}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
