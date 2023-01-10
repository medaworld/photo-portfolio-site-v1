import styled from 'styled-components';
import { hexToRGBA } from '../../../../helpers/functions/colors';

export const UploadPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const FormUploadContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 50vw;
  width: 50vw;
  contain: size;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(p) => hexToRGBA(p.theme.colors.primary, 0.2)};
    /* border-radius: 10px; */
    width: 100%;
    height: 100%;

    &:hover {
      opacity: 90%;
    }
  }

  #upload-photo {
    opacity: 0;
    position: absolute;
  }
`;

export const UploadArea = styled.label`
  object-fit: cover;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const PreviewImage = styled.div<{ img: string | undefined }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1em 0 0 1em;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(p) => p.img});
`;

export const ImageDetail = styled.div`
  position: relative;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const FormDescription = styled.textarea`
  height: 30%;
  user-select: text;
  resize: none;
  white-space: pre-wrap;
  word-break: break-word;
  border: none;
  font-family: Inter;
  font-size: 16px;
  padding: 15px;
  border-top-right-radius: 1em;
  border-bottom: 1px solid ${(p) => p.theme.colors.hover};

  :focus {
    outline: none;
  }
`;

export const FormDate = styled.input`
  outline: none;
  border: none;
  padding: 10px 15px;
  font-family: Inter;
  font-size: 16px;
  border-bottom: 1px solid ${(p) => p.theme.colors.hover};
  ::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export const FormCategory = styled.select`
  padding: 10px 15px;
  border: none;
  font-family: Inter;
  font-size: 16px;
  border-top-right-radius: 1em;
  border-bottom: 1px solid ${(p) => p.theme.colors.hover};

  option {
    position: absolute;
    background-color: DodgerBlue;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }
  :focus {
    outline: none;
  }
`;

export const FormButton = styled.button`
  border: none;
  font-family: Inter;
  font-size: 16px;
  color: ${(p) => p.theme.colors.color};
  height: 40px;
  bottom: 0;
  right: 0;
  position: absolute;
  width: 100%;
  transition: all 0.3s ease;
  overflow: hidden;
  border-bottom-right-radius: 1em;

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;
