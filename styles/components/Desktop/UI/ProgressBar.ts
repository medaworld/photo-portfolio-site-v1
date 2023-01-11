import styled from 'styled-components';

export const ProgressContainer = styled.div`
  position: absolute;
  height: 5px;
  width: 100%;
  bottom: 0;
`;

export const Progress = styled.div<{ fill: string }>`
  height: 5px;
  width: ${(p) => p.fill};
  background: ${(p) => p.theme.colors.success};
`;
