import React, { useState } from 'react';
import styled from 'styled-components';
import { StyleUnit } from '@/constants/styleUnit';
import { isUndefined } from '@/util/type';
import { joinStyleWithSemicolon } from '@/util/style';
import { useIntersectionObserver } from '@/hooks';

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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
`;
