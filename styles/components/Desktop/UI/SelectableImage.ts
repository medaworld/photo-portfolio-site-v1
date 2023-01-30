import styled from 'styled-components';
import { hexToRGBA } from '../../../../helpers/functions/colors';

export const ImageWrapper = styled.div`
  position: relative;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 90%;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Check = styled.div<{ selected: boolean }>`
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 5px;
  border-radius: 50%;

  img {
    position: absolute;
    width: 20px;
    opacity: 70%;
    transition: all 0.3s ease-out;
    opacity: ${(p) => (p.selected ? '80%' : '0')};

    &:hover {
      opacity: 50%;
    }
  }
`;

export const CoverTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 36px;
  overflow: hidden;
  text-overflow: clip;
  font-family: Poppins;
  background-color: ${(p) => hexToRGBA(p.theme.colors.primary, 0.2)};
  color: ${(p) => p.theme.colors.background};
  opacity: 90%;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;

export const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
