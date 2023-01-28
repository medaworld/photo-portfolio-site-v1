import styled from 'styled-components';

export const FormDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.primary};

  label {
    padding: 5px 15px;
  }
`;

export const FormDateInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  input {
    color: ${(p) => p.theme.colors.primary};

    border: none;
    width: 50%;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;
