import styled from 'styled-components';
import { hexToRGBA } from '../../../../helpers/functions/colors';
import device from '../../../../helpers/organizers/breakpoints';

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 5rem;
  padding: 0 1%;
  align-items: center;
  justify-content: space-between;
  opacity: 99%;
  position: fixed;
  box-sizing: border-box;
  z-index: 10;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: ${(p) => hexToRGBA(p.theme.colors.background, 0.7)};
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(8px);
  }

  @media ${device.mobileS} {
    padding: 0 3%;
  }
  @media ${device.laptop} {
    padding: 0 1%;
  }
`;

export const Nav = styled.nav`
  display: flex;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 1.5rem;
    font-size: 14px;

    &:hover {
      opacity: 80%;
    }
  }
`;

export const HeaderFill = styled.div`
  width: 100%;
  height: 5rem;
`;

export const LogoImg = styled.div<{ img: string }>`
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
