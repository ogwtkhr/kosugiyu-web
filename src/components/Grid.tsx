import React from 'react';
import styled from 'styled-components';

export type GridContainerProps = {
  columns?: number;
  gap?: number | string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-gap: ${({ gap = '1vw' }) => (typeof gap === 'number' ? `${gap}px` : gap)};
  grid-template-columns: 2vw repeat(5, 1fr) 2vw;
  grid-template-rows: 14vw;
  grid-auto-rows: 14vw;
  /*
  grid-template-rows: 18vw;
  grid-auto-rows: 18vw;
  */
`;

export type GridItemProps = {
  rowStart?: number;
  rowEnd?: number;
  columnStart?: number;
  columnEnd?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: nubmer;
  fullWidth?: boolean;
};

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

  ${({ marginTop = 0, marginRight = 0, marginBottom = 0, marginLeft = 0 }) => {
    if (marginTop && marginRight && marginBottom && marginLeft) return '';
    return `
      margin: ${marginTop}vw ${marginRight}vw ${marginBottom}vw ${marginLeft}vw;
    `;
  }}
`;
