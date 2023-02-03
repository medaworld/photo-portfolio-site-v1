import styled from 'styled-components';
import device from '../../../../helpers/organizers/breakpoints';

export const Gallery = styled.div`
  column-count: 2;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-gap: 2px;
  -webkit-column-gap: 2px;
  column-width: 50%;
`;

export const CoverContainer = styled.div`
  position: relative;
  transition: all 0.3s ease;
`;

export const CoverTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 40px;
  font-family: Poppins;
  background-color: black;
  color: ${(p) => p.theme.colors.background};
  opacity: 0%;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  &:hover {
    opacity: 50%;
  }

  @media ${device.mobileS} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 40px;
  }
`;

export const SlideshowContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
  align-items: center;
`;

export const MainImage = styled.div<{ img: string | undefined }>`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(p) => p.img});
`;

export const Buttons = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  padding: 0 40px;
  height: 50px;
`;

export const LeftArrowButton = styled.div`
  transition: opacity 0.3s ease;
  opacity: 30%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 40px;

  :hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

export const RightArrowButton = styled.div`
  transition: opacity 0.3s ease;
  opacity: 30%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 40px;

  :hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const SlideshowScrollContainer = styled.div`
  height: 15%;
  padding: 1% 2%;
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  overflow-x: scroll;
  grid-column-gap: 5px;
  width: 100%;
`;

export const SlideshowThumbnail = styled.div<{ img: string | undefined }>`
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

export const SlideshowThumbnailContainer = styled.div<{ selected: boolean }>`
  height: 100%;
  width: 150px;
  border: ${(p) => (p.selected ? '1px solid green' : '')};
`;
