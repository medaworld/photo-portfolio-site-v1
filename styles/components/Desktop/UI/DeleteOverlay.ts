import styled from 'styled-components';

export const DeleteOverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 15px;
  justify-content: space-evenly;

  p {
    font-size: 20px;
    margin: 5px 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  button {
    border: none;
    border-radius: 15px;
    font-size: 14px;
    padding: 10px;
    margin-bottom: 5px;

    :hover {
      filter: brightness(90%);
      transition: filter 0.1s ease-out;
      cursor: pointer;
    }
  }

  button:first-child {
    background-color: ${(p) => p.theme.colors.error};
    color: white;
  }
`;
