import { Inter } from '@next/font/google';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import nextSeoConfiguration from '../next-seo.config';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <DefaultSeo {...nextSeoConfiguration} />
      <Component {...pageProps} />
    </main>
  );
}
