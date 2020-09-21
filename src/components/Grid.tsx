import React, { useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useIntersectionObserver } from '@/hooks';
import { BoxProps, boxMixin, getBoxExpression } from './Box';
import Picture from './Picture';
import { ScreenType, ScreenValue } from '@/constants';

export type GridContainerProps = {
  columns?: number;
  gap?: number | string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-auto-rows: 14vw;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 14vw;

  ${media.greaterThan(ScreenType.LARGE)`
    width: ${ScreenValue.LARGE}px;
    margin: 0 auto;
    grid-auto-rows: 150px;
    grid-template-rows: 150px;
  `}
`;

export type GridOption = {
  rowStart?: number;
  rowEnd?: number;
  columnStart?: number;
  columnEnd?: number;
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
    const { rowStart = 1, rowEnd = 6, columnStart = 1, columnEnd = 6 } = grid;
    const OFFSET = 1;
    return `
      grid-row: ${rowStart} / ${rowEnd};
      grid-column: ${columnStart + OFFSET} / ${columnEnd + OFFSET};
    `;
  }}

  ${({ gridSmall }) => {
    if (!gridSmall) return '';
    const { rowStart = 1, rowEnd = 6, columnStart = 1, columnEnd = 6 } = gridSmall;
    const OFFSET = 1;
    return `
      @media(max-width: ${ScreenValue.SMALL}px) {
        grid-row: ${rowStart} / ${rowEnd};
        grid-column: ${columnStart + OFFSET} / ${columnEnd + OFFSET};
      }
    `;
  }}

  ${({ box }) =>
    box ? getBoxExpression(box) : ''}

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
};

export const GridImage: React.FC<GridImageProps> = ({ src }) => {
  // const [ref, isIntersecting, hasIntersected] = useIntersectionObserver<HTMLDivElement>();

  // return <GridImageContainer src={src} ref={ref} />;
  return <Picture relativePath={src} />;
};
