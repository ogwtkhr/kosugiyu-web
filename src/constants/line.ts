import { COLORS } from './colors';

// import { css } from 'styled-components';

const WIDTH = {
  THIN: 1,
  NORMAL: 2,
} as const;

const SHORT_HAND = {
  THIN: `solid ${WIDTH.THIN}px ${COLORS.UI_LINE_NORMAL}`,
  NORMAL: `solid ${WIDTH.NORMAL}px ${COLORS.UI_LINE_NORMAL}`,
} as const;

export const LINE = {
  WIDTH,
  SHORT_HAND,
} as const;

export default LINE;
