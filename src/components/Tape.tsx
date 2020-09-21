import React from 'react';
import styled from 'styled-components';
import { Colors, Spacing } from '@/constants';

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
  margin-bottom: ${Spacing.LARGE}px;

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Colors.ABSTRACT_WHITE};
  }
`;

const Text = styled.span`
  position: relative;
  z-index: 2;
`;
