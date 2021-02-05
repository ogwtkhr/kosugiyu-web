import React, { useEffect, useMemo } from 'react';
import { useParallax, ParallaxDirectionType, useScreenThreshold } from '@/hooks';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { ValueOf } from '@/types';
import { ScreenType, ScreenValue } from '@/constants';

export const ParallaxBasePosition = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
} as const;

export type ParallaxBasePosition = ValueOf<typeof ParallaxBasePosition>;

type Seeds = {
  [key in ParallaxBasePosition]: number;
};

type ParallaxProps = {
  fillLayout?: boolean;
  coefficient?: number;
  min?: number;
  max?: number;
  direction?: ParallaxDirectionType;
  zoom?: number;
  zoomSmall?: number;
  basePosition?: ParallaxBasePosition;
  onScroll?: (e: number) => void;
  verbose?: boolean;
  enableSmallScreen?: boolean;
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
  basePosition = ParallaxBasePosition.CENTER,
  onScroll,
  verbose,
  enableSmallScreen,
}) => {
  const [ref, { center, top, bottom }] = useParallax<HTMLDivElement>({
    min,
    max,
    coefficient,
    direction,
    verbose,
  });
  const seeds: Seeds = {
    [ParallaxBasePosition.TOP]: top,
    [ParallaxBasePosition.CENTER]: center,
    [ParallaxBasePosition.BOTTOM]: bottom,
  };

  const { overThreshold } = useScreenThreshold(ScreenValue.MEDIUM);
  const isSmallScreen = !overThreshold;

  const parallaxSeed = seeds[basePosition];
  const transformProperty = useMemo(() => {
    if (!enableSmallScreen && isSmallScreen) return '';
    return `translate3d(0, ${parallaxSeed}px, 0)`;
  }, [parallaxSeed, enableSmallScreen, isSmallScreen]);

  useEffect(() => {
    if (onScroll) onScroll(parallaxSeed);
  }, [onScroll, parallaxSeed]);

  return (
    <Outer
      ref={ref}
      fillLayout={fillLayout}
      style={{
        transform: transformProperty,
      }}
    >
      <Inner zoom={zoom} zoomSmall={enableSmallScreen ? zoomSmall : 1}>
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
