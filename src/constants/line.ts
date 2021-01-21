import { Colors } from './colors';

// import { css } from 'styled-components';

const Width = {
  THIN: 1,
  NORMAL: 2,
} as const;

const ShortHand = {
  THIN: `solid ${Width.THIN}px ${Colors.UI_LINE_NORMAL}`,
  NORMAL: `solid ${Width.NORMAL}px ${Colors.UI_LINE_NORMAL}`,
} as const;

export const LINE = {
  Width,
  ShortHand,
} as const;

export default LINE;
