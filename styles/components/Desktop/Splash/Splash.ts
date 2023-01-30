import styled from 'styled-components';

export const SplashWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: ${(p) => p.theme.colors.background};
  z-index: 11;
  justify-content: center;
  align-items: center;
  animation: splash 1.3s;
  transition: 0.2s;
  visibility: hidden;
  outline: 1px solid red;

  @keyframes splash {
    0% {
      visibility: visible;
      opacity: 100%;
    }
    70% {
      visibility: visible;
      opacity: 100%;
    }
    100% {
      visibility: hidden;
      opacity: 0%;
    }
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  margin-left: 20px;
  background-color: transparent;
  animation: sizeChange 1s;

  @keyframes sizeChange {
    0% {
      height: 20px;
      width: 25px;
    }
    70% {
      height: 110px;
      width: 130px;
    }
    80% {
      height: 90px;
      width: 110px;
    }
    85% {
      height: 100px;
      width: 120px;
    }
  }
`;

export const Logo = styled.div<{ img: string }>`
  display: flex;
  mask-image: url(${(p) => p.img});
  background-color: ${(p) => p.theme.colors.primary};
  align-self: center;
  width: 100%;
  height: 100%;
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
`;
