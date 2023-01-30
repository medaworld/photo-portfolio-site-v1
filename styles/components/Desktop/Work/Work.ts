import styled from 'styled-components';
import device from '../../../../helpers/organizers/breakpoints';

export const Container = styled.div``;

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
  height: 100%;

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
`;
export const ArrowButton = styled.div<{ appear: boolean }>`
  visibility: ${(p) => (p.appear ? 'hidden' : 'visible')};
  opacity: ${(p) => (p.appear ? '0' : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 40%;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 50px;
  border: 1px solid white;
  border-radius: 50%;
  user-select: none;
  transition: opacity 0.3s ease;

  :hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const SlideshowScroll = styled.div`
  height: 20%;
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
