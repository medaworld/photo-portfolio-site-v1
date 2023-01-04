import styled from 'styled-components';

export const Progress = styled.div<{ fill: string }>`
  height: 10px;
  width: ${(p) => p.fill};
  background: ${(p) => p.theme.colors.color};
  margin: 15px 0;
`;
