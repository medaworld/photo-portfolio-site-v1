import styled from 'styled-components';
import { hexToRGBA } from '../../../helpers/functions/colors';

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

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: ${(p) => hexToRGBA(p.theme.colors.background, 0.7)};
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(8px);
  }
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 1.5rem;
    font-size: 13px;

    &:hover {
      opacity: 80%;
    }
  }
`;

export const HeaderFill = styled.div`
  width: 100%;
  height: 5rem;
`;
