import React from 'react';
import styled from 'styled-components';
import { Colors, Spacing } from '@/constants';
import { getCurtainAnimationMixin } from '@/util/animation';

type TapeProps = {
  isAnimate?: boolean;
};

export const Tape: React.FC<TapeProps> = ({ isAnimate = true, children }) => {
  return (
    <Container isAnimate={isAnimate}>
      <Text>{children}</Text>
    </Container>
  );
};

const mixin = getCurtainAnimationMixin() as any; // TODO: 敗北…

const Container = styled.span<Pick<TapeProps, 'isAnimate'>>`
  display: inline-block;
  position: relative;
  margin-bottom: ${Spacing.LARGE}px;
  background-color: ${Colors.ABSTRACT_WHITE};
  ${mixin}

  &::after {
    background-color: ${Colors.ABSTRACT_WHITE};
  }
`;

const Text = styled.span`
  position: relative;
  z-index: 2;
`;
