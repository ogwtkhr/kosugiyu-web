import React, { useMemo } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { BoxProps, boxMixin, getBoxExpression } from './Box';
import Picture from './Picture';
import { ScreenType, ScreenValue } from '@/constants';

import { isNumber } from 'lodash';
import { IntersectionFadeIn, ReverseParallax } from '@/effects';

type NumberOrString = number | string;

export type GridContainerProps = {
  columns?: number;
  rowGap?: NumberOrString;
  rowGapSmall?: NumberOrString;
  columnGap?: NumberOrString;
  columnGapSmall?: NumberOrString;
};

const withUnit = (value: NumberOrString): string => (isNumber(value) ? `${value}px` : value);

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-column-gap: ${({ columnGap = '' }) => withUnit(columnGap)};
  grid-row-gap: ${({ rowGap = '' }) => withUnit(rowGap)};
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 3.5vw;
  grid-template-rows: 3.5vw;
  ${media.greaterThan<GridContainerProps>(ScreenType.LARGE)`
    width: ${ScreenValue.LARGE}px;
    margin: 0 auto;
    grid-column-gap: ${({ columnGapSmall = '' }) => withUnit(columnGapSmall)};
    grid-row-gap: ${({ rowGapSmall = '' }) => withUnit(rowGapSmall)};
    grid-auto-rows: 40px;
    grid-template-rows: 40px;
  `};
`;

type GridColumnRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type GridOption = {
  rowStart?: number;
  rowEnd?: number;
  columnStart?: GridColumnRange;
  columnEnd?: GridColumnRange;
};

export type GridItemProps = {
  grid?: GridOption;
  gridSmall?: GridOption;
  box?: BoxProps;
  boxSmall?: BoxProps;
  centering?: boolean;
};

export const GridItem = styled.div<GridItemProps>`
  display: block;
  ${({ grid }) => {
    if (!grid) return '';
    const { rowStart = 1, rowEnd = 12, columnStart = 1, columnEnd = 13 } = grid;
    return `
      grid-row: ${rowStart} / ${rowEnd};
      grid-column: ${columnStart} / ${columnEnd};
    `;
  }}

  ${({ gridSmall }) => {
    if (!gridSmall) return '';
    const { rowStart = 1, rowEnd = 12, columnStart = 1, columnEnd = 13 } = gridSmall;

    return `
      @media(max-width: ${ScreenValue.SMALL}px) {
        grid-row: ${rowStart} / ${rowEnd};
        grid-column: ${columnStart} / ${columnEnd};
      }
    `;
  }}

  ${({ box }) => (box ? getBoxExpression(box) : '')}

  @media(max-width: ${ScreenValue.SMALL}px) {
    ${({ boxSmall }) => (boxSmall ? getBoxExpression(boxSmall) : '')}
  }

  ${({ centering }) =>
    centering
      ? `
    display: flex;
    justify-content: center;
    align-items: center;
  `
      : ''}
`;

type GridImageProps = {
  src: string;
  speed?: number;
};

export const GridImage: React.FC<GridImageProps> = ({ src, speed }) => {
  return (
    <GridImageContainer>
      <ReverseParallax zoom={1.2} fillLayout coefficient={speed}>
        <IntersectionFadeIn slideIn fillLayout>
          <Picture relativePath={src} />
        </IntersectionFadeIn>
      </ReverseParallax>
    </GridImageContainer>
  );
};

const GridImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
