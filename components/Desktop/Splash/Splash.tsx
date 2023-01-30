import {
  ImageBox,
  Logo,
  SplashWrapper,
} from '../../../styles/components/Desktop/Splash/Splash';
import MyLogo from '/public/favicon.svg';

export default function Splash() {
  return (
    <SplashWrapper>
      <ImageBox>
        <Logo img={MyLogo.src} />
      </ImageBox>
    </SplashWrapper>
  );
}
