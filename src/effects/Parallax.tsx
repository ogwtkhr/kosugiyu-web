import React, { useMemo } from 'react';
import { useParallax, ParallaxDirectionType } from '@/hooks';
import styled, { css } from 'styled-components';

type ParallaxProps = {
  fillLayout?: boolean;
  coefficient?: number;
  min?: number;
  max?: number;
  direction?: ParallaxDirectionType;
  zoom?: number;
};

export const Parallax: React.FC<ParallaxProps> = ({
  fillLayout,
  coefficient = 0.1,
  min,
  max,
  direction,
  children,
  zoom = 1,
}) => {
  const [ref, { center: parallaxSeed }] = useParallax<HTMLDivElement>({
    min,
    max,
    coefficient,
    direction,
  });
  const transformProperty = useMemo(() => `translateY(${parallaxSeed}px)`, [parallaxSeed]);

  return (
    <Outer
      ref={ref}
      fillLayout={fillLayout}
      style={{
        transform: transformProperty,
      }}
    >
      <Inner zoom={zoom}>{children}</Inner>
    </Outer>
  );
};

export const ReverseParallax: React.FC<ParallaxProps> = (props) => (
  <Parallax {...props} direction={ParallaxDirectionType.REVERSE}>
    {props.children}
  </Parallax>
);

type ParallaxContainerProps = ParallaxProps;

const Outer = styled.div<Pick<ParallaxContainerProps, 'fillLayout'>>`
  ${({ fillLayout }) =>
    fillLayout
      ? css`
          width: 100%;
          height: 100%;
        `
      : ''};
`;

const Inner = styled.div<Pick<ParallaxContainerProps, 'zoom'>>`
  width: 100%;
  height: 100%;
  ${({ zoom }) =>
    zoom
      ? css`
          transform: scale(${zoom});
        `
      : ''};
`;

export default Parallax;
