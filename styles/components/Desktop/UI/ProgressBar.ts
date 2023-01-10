import styled from 'styled-components';

export const Progress = styled.div<{ fill: string }>`
  height: 2px;
  width: ${(p) => p.fill};
  background: ${(p) => p.theme.colors.success};
`;

export const ProgressContainer = styled.div`
  height: 5px;
  width: 50%;
  margin: 15px 0;
`;
