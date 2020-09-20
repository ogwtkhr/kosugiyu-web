import React, { useState } from 'react';
import styled from 'styled-components';
// import media from 'styled-media-query';
import { useIntersectionObserver } from '@/hooks';
import { BoxProps, boxMixin, getBoxExpression } from './Box';
import Picture from './Picture';

export type GridContainerProps = {
  columns?: number;
  gap?: number | string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-auto-rows: 14vw;
  grid-gap: ${({ gap = '1vw' }) => (typeof gap === 'number' ? `${gap}px` : gap)};
  grid-template-columns: 2vw repeat(5, 1fr) 2vw;
  grid-template-rows: 14vw;
  /&
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

  ${({ box }) => (box ? getBoxExpression(box) : '')}
`;

type GridImageProps = {
  src: string;
};

export const GridImage: React.FC<GridImageProps> = ({ src }) => {
  // const [ref, isIntersecting, hasIntersected] = useIntersectionObserver<HTMLDivElement>();

  // return <GridImageContainer src={src} ref={ref} />;
  return <Picture relativePath={src} />;
};

// const GridImageContainer = styled.div<GridImageProps>`
//   width: 100%;
//   height: 100%;
//   background-image: url(${({ src }) => src});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// `;
