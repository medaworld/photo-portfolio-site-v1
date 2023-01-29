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

export const BarHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const CloseIcon = styled.div`
  margin: 10px;
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

export const PrimaryButton = styled.button`
  border: none;
  font-family: Inter;
  font-size: 16px;
  color: ${(p) => p.theme.colors.color};
  height: 40px;
  width: 100%;
  transition: all 0.1s ease;
  overflow: hidden;
  margin-top: 10px;
  border-radius: 10px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  font-family: Inter;
  font-size: 16px;
  color: #e72b2b;
  height: 40px;
  width: 100%;
  transition: all 0.1s ease;
  overflow: hidden;
  border-radius: 10px;
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
