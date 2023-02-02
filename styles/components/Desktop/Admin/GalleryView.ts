import styled from 'styled-components';

export const GalleryContainer = styled.div`
  height: 85vh;
  overflow: scroll;
  width: 100%;
  display: block;
`;

export const GalleryImages = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
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

export const LoadMore = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;

  button {
    width: 20%;
  }
`;
