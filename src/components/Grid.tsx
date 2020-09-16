import React, { useState } from 'react';
import styled from 'styled-components';
import { useIntersectionObserver } from '@/hooks';
import { BoxProps, boxMixin } from './Box';

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
`;

export type GridItemProps = {
  rowStart?: number;
  rowEnd?: number;
  columnStart?: number;
  columnEnd?: number;
  fullWidth?: boolean;
} & BoxProps;

export const GridItem = styled.div<GridItemProps>`
  display: block;
  background-color: green;
  ${({ rowStart = 1, rowEnd = 6, columnStart = 1, columnEnd = 6 }) => {
    const OFFSET = 1;
    return `
      grid-row: ${rowStart} / ${rowEnd};
      grid-column: ${columnStart + OFFSET} / ${columnEnd + OFFSET};
    `;
  }}

  ${boxMixin};
`;

type GridImageProps = {
  src: string;
};

export const GridImage: React.FC<GridImageProps> = ({ src }) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver<HTMLDivElement>();

  return <GridImageContainer src={src} ref={ref} />;
};

const GridImageContainer = styled.div<GridImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
