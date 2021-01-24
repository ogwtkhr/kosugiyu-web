import React from 'react';
import { useIntersectionObserver } from '@/hooks';
import styled, { css } from 'styled-components';
import { getFadeInMixin, FadeInMixinProps } from '@/util/animation';

type IntersectionFadeInBaseProps = {
  fillLayout?: boolean;
};

type IntersectionFadeInProps = IntersectionFadeInBaseProps & Pick<FadeInMixinProps, 'withSlideIn'>;

export const IntersectionFadeIn: React.FC<IntersectionFadeInProps> = ({
  fillLayout,
  withSlideIn,
  children,
}) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>();

  return (
    <Container
      ref={ref}
      fillLayout={fillLayout}
      isAnimate={isIntersecting}
      withSlideIn={withSlideIn}
    >
      {children}
    </Container>
  );
};

type IntersectionFadeInContainerProps = IntersectionFadeInBaseProps & FadeInMixinProps;

const Container = styled.div<IntersectionFadeInContainerProps>`
  ${getFadeInMixin()};
  ${({ fillLayout }) =>
    fillLayout
      ? css`
          width: 100%;
          height: 100%;
        `
      : ''}
`;

export default IntersectionFadeIn;
