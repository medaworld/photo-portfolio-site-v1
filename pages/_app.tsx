import type { AppProps } from 'next/app';
import Head from 'next/head';

import MyLogo from '/public/favicon.svg';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../styles/themes/LightTheme';
import { GlobalStyle } from '../styles/GlobalStyles';
import Layout from '../components/Desktop/Layout/Layout';
import { SessionProvider } from 'next-auth/react';
import { NotificationContextProvider } from '../context/notificationContext';
import { useEffect, useState } from 'react';
import Splash from '../components/Desktop/Splash/Splash';

export default function App({ Component, pageProps }: AppProps) {
  const [splash, setSplash] = useState(true);
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1500);
    setTimeout(() => {
      setShowPage(true);
    }, 800);
  }, []);

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
            {splash && <Splash />}
            {showPage && (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </NotificationContextProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
