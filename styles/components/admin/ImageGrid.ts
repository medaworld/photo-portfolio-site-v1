import styled from 'styled-components';

export const GridLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 293px));
  justify-content: center;
  grid-gap: 15px;
`;

export const GalleryItem = styled.div<{ img: string }>`
  background: center url(${(p: any) => p.img});
  background-size: cover;
  padding-bottom: 100%;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;
