import React from 'react';
import styled from 'styled-components';

export const Tape: React.FC = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.span`
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: white;
  }
`;

const Text = styled.span`
  position: relative;
  z-index: 2;
`;
