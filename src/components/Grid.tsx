import React from 'react';
import styled from 'styled-components';

export type GridContainerProps = {
  columns?: number;
  gap?: number | string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-gap: ${({ gap = '1vw' }) => (typeof gap === 'number' ? `${gap}px` : gap)};
  grid-template-columns: 1vw repeat(8, 1fr) 1vw;
  grid-template-columns: 10vw;
  grid-auto-rows: 10vw;
`;

export const GridItem = styled.div`
  display: block;
`;
