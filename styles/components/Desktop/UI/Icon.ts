import styled from 'styled-components';

export const IconImg = styled.div<{ img: string; color?: string }>`
  display: flex;
  mask-image: url(${(p) => p.img});
  background-color: ${(p) =>
    p.color ? p.theme.colors.background : p.theme.colors.primary};
  width: 100%;
  height: 100%;
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: 0.5s;

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;
