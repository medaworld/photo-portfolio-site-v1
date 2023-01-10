import styled from 'styled-components';

export const ProgressContainer = styled.div`
  position: relative;
  height: 5px;
  width: 100%;
  bottom: 0;
  overflow: hidden;
`;

export const Progress = styled.div<{ fill: string }>`
  height: 5px;
  width: ${(p) => p.fill};
  background: ${(p) => p.theme.colors.success};
  position: relative;
`;
