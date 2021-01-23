import { css } from 'styled-components';
import { Colors } from './colors';

import { ValueOf } from '@/types';

export const TextSize = {
  XXX_SMALL: 1,
  XX_SMALL: 1.1,
  X_SMALL: 1.2,
  SMALL: 1.4,
  NORMAL: 1.6,
  LARGE: 2,
  X_LARGE: 2.4,
  XX_LARGE: 2.8,
  XXX_LARGE: 3.2,
  XXXX_LARGE: 4.8,
} as const;

export type TextSize = ValueOf<typeof TextSize>;

export const TypeFace = {
  BASE: `'Noto Sans JP', sans-serif`,
  SANS_SERIF: 'Helvetica Neue, Helvetica, Arial, sans-serif',
} as const;

export const TextWeight = {
  NORMAL: 300,
  MEDIUM: 400,
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

export const LetterSpacing = {
  SEMI_WIDE: 0.1,
  WIDE: 0.25,
} as const;

const Mixin = {
  BASE: css`
    color: ${Colors.UI_TEXT_MAIN};
    font-family: ${TypeFace.BASE};
    font-feature-settings: 'palt';
    /* font-size: ${TextSize.NORMAL}rem; */
    font-weight: ${TextWeight.NORMAL};
    line-height: ${LineHeight.THICK};
    letter-spacing: 0.1em;
    text-align: justify;
  `,
  DISPLAY: css`
    color: ${Colors.UI_TEXT_MAIN};
    font-family: ${TypeFace.BASE};
    font-feature-settings: 'palt';
    /* font-size: ${TextSize.XXX_LARGE}rem; */
    font-weight: ${TextWeight.BOLD};
    line-height: ${LineHeight.NORMAL};
    letter-spacing: ${LetterSpacing.WIDE}em;
  `,
  SUB: css`
    color: ${Colors.UI_TEXT_SUB};
    font-family: ${TypeFace.BASE};
    font-size: ${TextSize.SMALL}rem;
  `,
  EXTENDED: css`
    transform: ${TypeStyle.EXTENDED};
  `,
  VERTICAL_WRITING: css`
    writing-mode: vertical-rl;
    text-orientation: upright;
  `,
  HORIZONTAL_WRITING: css`
    writing-mode: initial;
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
