import styled from 'styled-components';

export const GalleryContainer = styled.div`
  height: 85vh;
  overflow: scroll;
  display: flex;
`;

export const Gallery = styled.div`
  display: block;
  position: relative;
`;

export const GallerySection = styled.div`
  display: block;
  position: relative;
`;

export const SectionImages = styled.div`
  column-count: 3;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-gap: 2px;
  -webkit-column-gap: 2px;
  column-width: 50%;
`;

export const DetailBar = styled.div`
  min-width: 300px;
  max-width: 300px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const FormDescription = styled.textarea`
  height: 20%;
  user-select: text;
  resize: none;
  border: none;
  font-family: Inter;
  color: ${(p) => p.theme.colors.primary};
  font-size: 16px;
  padding: 15px;
  overflow-y: hidden;

  :focus {
    outline: none;
  }
`;
