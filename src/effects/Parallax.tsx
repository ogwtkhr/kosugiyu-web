import React, { useMemo } from 'react';
import { useParallax, ParallaxDirectionType } from '@/hooks';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { ValueOf } from '@/types';
import { ScreenType } from '@/constants';

const BasePosition = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
} as const;

type BasePosition = ValueOf<typeof BasePosition>;

type ParallaxProps = {
  fillLayout?: boolean;
  coefficient?: number;
  min?: number;
  max?: number;
  direction?: ParallaxDirectionType;
  zoom?: number;
  zoomSmall?: number;
  basePosition?: BasePosition;
};

export const Parallax: React.FC<ParallaxProps> = ({
  fillLayout,
  coefficient = 0.1,
  min = -1000,
  max = 1000,
  direction,
  children,
  zoom = 1,
  zoomSmall,
  basePosition = BasePosition.CENTER,
}) => {
  const [ref, { center, top, bottom }] = useParallax<HTMLDivElement>({
    min,
    max,
    coefficient,
    direction,
  });
  const seeds = {
    [BasePosition.TOP]: top,
    [BasePosition.CENTER]: center,
    [BasePosition.BOTTOM]: bottom,
  };

  const parallaxSeed = seeds[basePosition];
  const transformProperty = useMemo(() => `translateY(${parallaxSeed}px)`, [parallaxSeed]);

  return (
    <Outer
      ref={ref}
      fillLayout={fillLayout}
      style={{
        transform: transformProperty,
      }}
    >
      <Inner zoom={zoom} zoomSmall={zoomSmall}>
        {children}
      </Inner>
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

const Inner = styled.div<Pick<ParallaxContainerProps, 'zoom' | 'zoomSmall'>>`
  width: 100%;
  height: 100%;
  ${({ zoom }) =>
    zoom
      ? css`
          transform: scale(${zoom});
        `
      : ''};

  ${({ zoomSmall }) =>
    zoomSmall
      ? css`
          ${media.lessThan(ScreenType.MEDIUM)`
            transform: scale(${zoomSmall});
          `}
        `
      : ''};
`;

export default Parallax;
