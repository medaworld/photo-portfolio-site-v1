import styled from 'styled-components';

export const ArrowWrapper = styled.div`
  padding: 10px;
  position: absolute;
  background-color: #1b1b1b;
  z-index: 5;
  opacity: 50%;
  transition: 0.3s ease;

  :hover {
    opacity: 80%;
  }
`;
