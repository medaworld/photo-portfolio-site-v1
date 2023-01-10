import styled from 'styled-components';

export const IconImg = styled.div<{ img: string; color?: string }>`
  display: flex;
  mask-image: url(${(p) => p.img});
  background-color: ${(p) =>
    p.color ? p.theme.colors.background : p.theme.colors.primary};
  width: 100%;
  height: 100%;
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: 0.5s;

  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const CloseIcon = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 15px;
  z-index: 11;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 15vh;
  left: 10%;
  width: 80%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 11;
  animation: slide-down 300ms ease-out forwards;
`;

export const Progress = styled.div<{ fill: string }>`
  height: 2px;
  width: ${(p) => p.fill};
  background: ${(p) => p.theme.colors.success};
`;

export const ProgressContainer = styled.div`
  height: 5px;
  width: 50%;
  margin: 15px 0;
`;

export const ImageContainer = styled.div`
  width: 100%;
  /* position: relative;
  padding-bottom: 100%;
  overflow: hidden; */
  border: 1px solid red;
  position: relative;
  height: fit-content;

  .image {
    position: relative;
    object-fit: contain;
    width: 100%;
    height: fit-content;
  }
`;

export const ImageWrapper = styled.div`
  /* position: relative; */
`;
