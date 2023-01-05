import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  padding: 15px;
  align-items: center;
`;

const Card: React.FC<PropsWithChildren> = (props) => {
  return <CardWrapper>{props.children}</CardWrapper>;
};

export default Card;
