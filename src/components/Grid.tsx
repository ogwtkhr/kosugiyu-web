import React from 'react';
import styled from 'styled-components';
import { StyleUnit } from '@/constants/styleUnit';
import { isUndefined } from '@/util/type';
import { joinStyleWithSemicolon } from '@/util/style';

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
  unit?: StyleUnit;
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
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

  ${({ margin, marginTop, marginRight, marginBottom, marginLeft, unit = StyleUnit.VW }) => {
    return joinStyleWithSemicolon(
      isUndefined(margin) ? '' : `margin: ${margin + unit}`,
      isUndefined(marginTop) ? '' : `margin-top: ${marginTop + unit}`,
      isUndefined(marginRight) ? '' : `margin-right: ${marginRight + unit}`,
      isUndefined(marginBottom) ? '' : `margin-bottom: ${marginBottom + unit}`,
      isUndefined(marginLeft) ? '' : `margin-left: ${marginLeft + unit}`,
    );
  }}
`;
