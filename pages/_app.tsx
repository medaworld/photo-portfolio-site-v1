import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import Head from 'next/head';

import MyLogo from '/public/favicon.svg';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>MEDA.photo</title>
        <meta name="description" content="MEDA.photo Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={MyLogo.src} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
