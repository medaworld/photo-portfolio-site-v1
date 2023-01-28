import styled from 'styled-components';
import { hexToRGBA } from '../../../../helpers/functions/colors';

export const UploadPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const GalleryMessage = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  margin-top: 80px;
  font-size: 25px;
  text-align: center;
`;

export const UploadOverlayContainer = styled.div`
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
    width: 100%;
    height: 100%;
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

export const ImageSlideshowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => hexToRGBA(p.theme.colors.primary, 0.2)};
`;

export const SlideshowMain = styled.div<{ img: string | undefined }>`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(p) => p.img});
`;

export const SlideshowScroll = styled.div`
  height: 20%;
  padding: 1% 0;
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  overflow-x: scroll;
  grid-column-gap: 5px;
`;

export const SlideshowThumbnailContainer = styled.div`
  height: 100%;
  width: 100px;
`;

export const SlideshowThumbnailFill = styled.div<{ img: string | undefined }>`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(p) => p.img});

  &:hover {
    cursor: pointer;
  }
`;

export const Remove = styled.div`
  position: relative;

  img {
    position: absolute;
    width: 20px;
    opacity: 70%;
    transition: all 0.3s ease-out;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      opacity: 100%;
    }
  }
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
  border: none;
  font-family: Inter;
  color: ${(p) => p.theme.colors.primary};
  font-size: 16px;
  padding: 15px;
  padding-top: 30px;
  overflow-y: hidden;

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

export const FormInput = styled.input`
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  color: ${(p) => p.theme.colors.hover};

  &:focus {
    outline: none;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(p) => p.theme.colors.formBorder};
`;

export const FormError = styled.div`
  display: flex;
  height: 50px;
  margin: 5%;
  color: #bb2d2d;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const CompleteMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 40%;
  font-size: 24px;
  text-align: center;
  color: ${(p) => p.theme.colors.background};
  background-color: ${(p) => hexToRGBA(p.theme.colors.primary, 0.8)};
`;
