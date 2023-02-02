import styled from 'styled-components';

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const LoaderWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  align-self: center;
  justify-self: center;
`;

export const FirstSpan = styled.span`
  background-color: ${(p) => p.theme.colors.primary};
  width: 10px;
  height: 10px;
  margin: 1px;
  border-radius: 100%;
  display: inline-block;
  animation-name: expander1;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes expander1 {
    0% {
      transform: translateX(15px);
    }
    25% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(15px);
    }
    75% {
      transform: translateX(0px);
    }
  }
`;

export const SecondSpan = styled.span`
  background-color: ${(p) => p.theme.colors.primary};
  width: 10px;
  height: 10px;
  margin: 1px;
  border-radius: 100%;
  display: inline-block;
`;

export const ThirdSpan = styled.span`
  background-color: ${(p) => p.theme.colors.primary};
  width: 10px;
  height: 10px;
  margin: 1px;
  border-radius: 100%;
  display: inline-block;
  animation-name: expander3;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes expander3 {
    0% {
      transform: translateX(-15px);
    }
    25% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-15px);
    }
    75% {
      transform: translateX(0px);
    }
  }
`;
