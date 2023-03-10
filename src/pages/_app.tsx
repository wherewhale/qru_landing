import 'src/styles/_globals.scss';

import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />{' '}
    </ParallaxProvider>
  );
}
