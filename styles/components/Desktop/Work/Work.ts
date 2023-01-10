import styled from 'styled-components';

export const Container = styled.div``;

export const Gallery = styled.div`
  column-count: 2;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-gap: 2px;
  -webkit-column-gap: 2px;
  column-width: 50%;
`;

export const GalleryItem = styled.div<{ img: string }>`
  width: 100%;
  height: 0;
  padding-top: 66.64%;
  margin-bottom: 2px;

  background-image: url(${(p: any) => p.img});
  background-size: cover;
`;
