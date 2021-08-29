import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { browserGraphQl } from '../clients/browserGraphQl.client';
import MuiTheme from '../components/MuiTheme/MuiTheme';

import '../styles/resets.styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCurrentlyPlaying } from '../stores/currentlyPlaying.store';
import { FlyoutPlayer } from '../components/FlyoutPlayer/FlyoutPlayer';

function MyApp({ Component, pageProps }: AppProps) {
  const { url } = useCurrentlyPlaying(({ url }) => ({ url }));
  return (
    <MuiTheme>
      <ApolloProvider client={browserGraphQl}>
        <Component {...pageProps} />
        {url && <FlyoutPlayer />}
      </ApolloProvider>
    </MuiTheme>
  );
}
export default MyApp;
