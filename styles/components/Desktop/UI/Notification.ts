import styled from 'styled-components';

export const Notifier = styled.div<{ statusColor: string; show: boolean }>`
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 5px 0 0px 5px;
  background-color: ${(p) => p.statusColor};
  transform: translate(${(p) => (p.show ? '0' : '100%')});
  transition: 0.5s ease-in-out;
  margin: 10px 0;
  z-index: 3;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }
`;

export const Message = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
`;
