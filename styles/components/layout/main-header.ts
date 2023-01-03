import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 5rem;
  padding: 0 1%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #414141;
  background-color: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 99%;
  position: fixed;
  box-sizing: border-box;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(255, 255, 255, 0.7);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(8px);
  }
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 1.5rem;

    &:hover {
      opacity: 80%;
    }
  }
`;

export const HeaderFill = styled.div`
  width: 100%;
  height: 5rem;
`;
