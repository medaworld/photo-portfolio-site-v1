import styled from 'styled-components';

export const Footer = styled.footer`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  padding: 15px;
`;

export const ToTop = styled.a`
  color: ${(p) => p.theme.colors.hover};
  font-size: 20px;
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

export const Copyright = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
