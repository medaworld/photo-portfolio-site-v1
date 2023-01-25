import styled from 'styled-components';
import MyLogo from '/public/favicon.svg';

const LogoImg = styled.div<{ img: string }>`
  display: flex;
  mask-image: url(${(p: any) => p.img});
  background-color: black;
  align-self: center;
  width: 100%;
  height: 100%;
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: 0.5s;

  &:hover {
    background-color: #273644;
  }
`;

function Logo() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <LogoImg img={MyLogo.src} style={{ maskImage: `url(${MyLogo.src})` }} />
    </div>
  );
}

export default Logo;
