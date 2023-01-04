import styled from 'styled-components';

export const GridLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const GridRow = styled.div`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  position: relative;
`;

export const GridBox = styled.div<{ img: string }>`
  background: center url(${(p: any) => p.img});
  background-size: cover;
  display: block;
  position: relative;
  width: 200px;
  height: 200px;
  margin-right: 3px;
`;
