import styled from 'styled-components';

export const ContactPageContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid ${(p) => p.theme.colors.formBorder};
  padding: 20px;
  border-radius: 10px;
  transition: 1s;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const FormContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div:first-child {
    margin-right: 15px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: none;
  margin-bottom: 5px;
`;

export const FormInput = styled.input<{ invalid: boolean }>`
  margin-bottom: 10px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid
    ${(p) => (p.invalid ? p.theme.colors.error : p.theme.colors.formBorder)};
  outline: none;
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.primary};
  padding: 0px 8px;

  :-webkit-autofill,
  :-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const FormMessage = styled.textarea<{ invalid: boolean }>`
  margin-bottom: 10px;
  border-radius: 10px;
  resize: none;
  border: 1px solid
    ${(p) => (p.invalid ? p.theme.colors.error : p.theme.colors.formBorder)};
  outline: none;
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.primary};
  font-family: Inter, sans-serif;
  padding: 5px 8px;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  height: 30px;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.formBorder};
  border: none;
  color: ${(p) => p.theme.colors.primary};

  &:hover {
    transition: 0.5s;
    cursor: pointer;
    opacity: 80%;
  }
`;
