import styled from 'styled-components';

export const FormSelectWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  font-family: Inter;
  font-size: 16px;
  width: 100%;
  color: ${(p) => p.theme.colors.primary};
  background-color: white;
`;

export const FormSelectTrigger = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  transition: opacity 0.2s ease;
  position: relative;
  overflow-x: hidden;

  &:hover {
    cursor: pointer;
  }
  p {
    white-space: nowrap;
    line-height: 0;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  right: 0;
  padding: 0 10px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const FormOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  max-height: 500%;
  background-color: white;
  overflow-y: scroll;
  z-index: 1;
  border-bottom: 1px solid ${(p) => p.theme.colors.formBorder};
`;

export const FormOption = styled.span`
  padding: 10px 15px;
  &:hover {
    background-color: ${(p) => p.theme.colors.selected};
    cursor: pointer;
  }
`;
