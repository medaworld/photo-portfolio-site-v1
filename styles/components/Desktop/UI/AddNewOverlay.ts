import styled from 'styled-components';

export const DeleteOverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 150px;
  width: 300px;
  padding: 15px;
  justify-content: space-evenly;

  p {
    font-size: 20px;
    height: 20px;
    margin: 0 0 10px 0;
  }

  input {
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    height: 40px;
    border: 1px solid ${(p) => p.theme.colors.formBorder};
    color: ${(p) => p.theme.colors.primary};

    &:focus {
      outline: none;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    border: none;
    border-radius: 10px;
    font-size: 14px;
    padding: 10px;
    width: 50%;

    :hover {
      filter: brightness(90%);
      transition: filter 0.1s ease-out;
      cursor: pointer;
    }
  }

  button:first-child {
    background-color: ${(p) => p.theme.colors.selected};
    color: black;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
`;

export const ErrorMsg = styled.div`
  color: ${(p) => p.theme.colors.error};
  height: 20px;
  padding-bottom: 20px;
`;
