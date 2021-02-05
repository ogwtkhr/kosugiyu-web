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
  SEMI_WIDE: 0.15,
  MIDDLE_WIDE: 0.2,
  WIDE: 0.25,
  VERY_WIDE: 0.4,
} as const;

export const TypographyMixin = {
  BASE: css`
    color: ${Colors.UI_TEXT_MAIN};
    font-family: ${TypeFace.BASE};
    font-feature-settings: 'palt';
    font-weight: ${TextWeight.NORMAL};
    line-height: ${LineHeight.THICK};
    letter-spacing: ${LetterSpacing.SEMI_WIDE}em;
    text-align: justify;
  `,
  DISPLAY: css`
    color: ${Colors.UI_TEXT_MAIN};
    font-family: ${TypeFace.BASE};
    font-feature-settings: 'palt';
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
  LINK: css`
    transition: opacity 0.2s ease;
    border-bottom: 1px ${Colors.UI_TEXT_MAIN} dotted;
    color: ${Colors.UI_TEXT_MAIN};
    text-decoration: none;

    &:hover {
      opacity: 0.4;
    }
  `,
  LINK_SUB: css`
    transition: opacity 0.2s ease;
    border-bottom: 1px ${Colors.UI_TEXT_SUB} dotted;
    color: ${Colors.UI_TEXT_SUB};
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }
  `,
} as const;

export const Typography = {
  TextSize,
  TextWeight,
  TypeFace,
  TypeStyle,
  LineHeight,
  Mixin: TypographyMixin,
} as const;

export default Typography;
