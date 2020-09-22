import { css } from 'styled-components';
import { Colors } from './colors';

export const TextSize = {
  SMALL: 1.4,
  NORMAL: 1.6,
  LARGE: 2,
  X_LARGE: 3,
  XX_LARGE: 4,
} as const;

export const TypeFace = {
  // TODO: 英字等
  BASE: `'Noto Sans JP', sans-serif;`,
} as const;

export const TextWeight = {
  NORMAL: 300,
  BOLD: 500,
} as const;

export const TypeStyle = {
  EXTENDED: 'scale(1, 0.9)',
} as const;

export const LineHeight = {
  MONOLITHIC: 1,
  THIN: 1.3,
  NORMAL: 1.6,
  THICK: 2,
} as const;

const Mixin = {
  BASE: css`
    color: ${Colors.UI_TEXT_MAIN};
    font-family: ${TypeFace.BASE};
    font-feature-settings: 'palt';
    font-size: ${TextSize.NORMAL}rem;
    font-weight: ${TextWeight.NORMAL};
    line-height: ${LineHeight.THICK};
    letter-spacing: 0.1em;
    text-align: justify;
  `,
  DISPLAY: css`
    color: ${Colors.UI_TEXT_MAIN};
    font-family: ${TypeFace.BASE};
    font-size: ${TextSize.X_LARGE}rem;
    font-weight: ${TextWeight.BOLD};
    line-height: ${LineHeight.NORMAL};
  `,
  SUB: css`
    color: ${Colors.UI_TEXT_SUB};
    font-family: ${TypeFace.BASE};
    font-size: ${TextSize.SMALL}rem;
  `,
  EXTENDED: css`
    transform: ${TypeStyle.EXTENDED};
  `,
} as const;

export const Typography = {
  TextSize,
  TextWeight,
  TypeFace,
  TypeStyle,
  LineHeight,
  Mixin,
} as const;

export default Typography;
