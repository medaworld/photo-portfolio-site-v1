import type { AppProps } from 'next/app';
import Head from 'next/head';

import MyLogo from '/public/favicon.svg';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../styles/themes/LightTheme';
import { GlobalStyle } from '../styles/GlobalStyles';
import Layout from '../components/Desktop/Layout/Layout';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { NotificationContextProvider } from '../context/notificationContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>MEDA.photo</title>
        <meta name="description" content="MEDA.photo Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={MyLogo.src} />
      </Head>
      <ThemeProvider theme={LightTheme}>
        <SessionProvider session={pageProps.session}>
          <GlobalStyle />
          <NotificationContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NotificationContextProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
