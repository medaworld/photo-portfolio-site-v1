import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.background};
  padding: 10px 15px;
  font-size: 16px;
  height: 40px;
  color: ${(p) => p.theme.colors.primary};

  &:focus {
    outline: none;
  }
`;
