import Head from 'next/head';
import { Inter } from '@next/font/google';

import MyLogo from '/public/favicon.svg';
import Img from '/public/static/001.jpg';
import { SlideImage, Main } from '../styles';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>MEDA.photo</title>
        <meta name="description" content="MEDA.photo Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={MyLogo.src} />
      </Head>
      <Main>
        <SlideImage img={Img.src}></SlideImage>
      </Main>
    </>
  );
}
