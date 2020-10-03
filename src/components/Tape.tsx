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

const Container = styled.span<Pick<TapeProps, 'isAnimate'>>`
  display: inline-block;
  margin-bottom: ${Spacing.LARGE}px;
  background-color: ${Colors.ABSTRACT_WHITE};
  ${getCurtainAnimationMixin({
    duration: 1500,
  }) as any}
`;

const Text = styled.span`
  position: relative;
  z-index: 2;
`;
