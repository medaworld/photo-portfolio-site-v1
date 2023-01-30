import styled from 'styled-components';

export const CustomButton = styled.button<{
  textColor: string;
  buttonColor: string;
}>`
  border: none;
  font-family: Inter;
  font-size: 16px;
  color: ${(p) => (p.textColor ? p.textColor : p.theme.colors.color)};
  background-color: ${(p) => (p.buttonColor ? p.buttonColor : '')};
  height: 40px;
  width: 100%;
  margin: 5px 0;
  border-radius: 10px;
  transition: all 0.1s ease;
  overflow: hidden;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
