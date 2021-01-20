import React from 'react';
import { useIntersectionObserver } from '@/hooks';
import styled, { css } from 'styled-components';
import { getFadeInMixin, AnimationMixinProps } from '@/util/animation';

type IntersectionFadeInProps = {
  fill?: boolean;
};

export const IntersectionFadeIn: React.FC<IntersectionFadeInProps> = ({ fill, children }) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>();

  return (
    <Container ref={ref} fill={fill} isAnimate={isIntersecting}>
      {children}
    </Container>
  );
};

const Container = styled.div<IntersectionFadeInProps & AnimationMixinProps>`
  ${getFadeInMixin()};
  ${({ fill }) =>
    fill
      ? css`
          width: 100%;
          height: 100%;
        `
      : ''}
`;

export default IntersectionFadeIn;
