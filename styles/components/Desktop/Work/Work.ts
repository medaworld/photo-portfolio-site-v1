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

export const Slideshow = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #1b1b1b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideshowImageContainer = styled.div`
  height: 80%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
