import styled from 'styled-components';

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
