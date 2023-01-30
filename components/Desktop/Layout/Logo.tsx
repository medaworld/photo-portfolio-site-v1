import { LogoImg } from '../../../styles/components/Desktop/Layout/MainHeader';
import MyLogo from '/public/favicon.svg';

export default function Logo() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <LogoImg img={MyLogo.src} style={{ maskImage: `url(${MyLogo.src})` }} />
    </div>
  );
}
