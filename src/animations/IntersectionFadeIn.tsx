import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks';
import styled, { css } from 'styled-components';
import { getFadeInMixin, FadeInMixinProps } from '@/util/animation';
import { isFunction } from 'lodash';

type IntersectionFadeInBaseProps = {
  fillLayout?: boolean;
  wait?: number;
};

type IntersectionFadeInProps = IntersectionFadeInBaseProps & Pick<FadeInMixinProps, 'slideIn'>;

export const IntersectionFadeIn: React.FC<IntersectionFadeInProps> = ({
  fillLayout,
  slideIn,
  wait = 0,
  children,
}) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>();
  const [isAnimate, setIsAnimate] = useState<boolean>(isIntersecting);
  useEffect(() => {
    setTimeout(() => {
      setIsAnimate(isIntersecting);
    }, wait);
  }, [isIntersecting, wait]);

  return (
    <Container ref={ref} fillLayout={fillLayout} isAnimate={isAnimate} slideIn={slideIn}>
      {isFunction(children) ? children() : children}
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
