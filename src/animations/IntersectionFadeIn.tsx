import React from 'react';
import { useIntersectionObserver } from '@/hooks';
import styled from 'styled-components';
import { getFadeInMixin, AnimationMixinProps } from '@/util/animation';

type IntersectionFadeInProps = {
  //
};

export const IntersectionFadeIn: React.FC<IntersectionFadeInProps> = ({ children }) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>();

  return (
    <Container ref={ref} isAnimate={isIntersecting}>
      {children}
    </Container>
  );
};

const Container = styled.div<AnimationMixinProps>`
  ${getFadeInMixin()}
`;

export default IntersectionFadeIn;
