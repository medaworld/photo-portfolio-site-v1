import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';

import Head from 'next/head';

import MyLogo from '/public/favicon.svg';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../styles/themes/LightTheme';
import { GlobalStyle } from '../styles/GlobalStyles';
import Layout from '../components/Desktop/Layout/Layout';
import { useRouter } from 'next/router';

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
        <GlobalStyle />
        <Layout>
          {/* <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{ duration: 0.75 }}
              variants={{
                initialState: { opacity: 0 },
                animateState: { opacity: 1 },
                exitState: { opacity: 0 },
              }}
            > */}
          <Component {...pageProps} />
          {/* </motion.div>
          </AnimatePresence> */}
        </Layout>
      </ThemeProvider>
    </>
  );
}
