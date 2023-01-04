import { Inter } from '@next/font/google';

import Img from '/public/images/003.jpg';
import { SlideImage, Main } from '../styles';

export default function HomePage() {
  return (
    <>
      <Main>
        <SlideImage img={Img.src}></SlideImage>
      </Main>
    </>
  );
}
