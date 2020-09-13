import { css } from 'styled-components';
import media from 'styled-media-query';
import { Colors } from './colors';
import { ScreenType } from './screenType';

const TextSize = {
  SMALL: 1.4,
  NORMAL: 1.6,
  LARGE: 2,
  X_LARGE: 3,
} as const;

const TypeFace = {
  // TODO: 英字等
  BASE: `'Noto Sans JP', sans-serif;`,
  // BASE: `sans-serif;`,
} as const;

const LineHeight = {
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
    ${media.greaterThan(ScreenType.MEDIUM)`
      font-size: ${TextSize.NORMAL}rem;
    `}
    ${media.lessThan(ScreenType.MEDIUM)`
        font-size: ${TextSize.SMALL}rem;
    `}
    font-weight: 500;
    line-height: ${LineHeight.THICK};
    letter-spacing: 0.1em;
  `,
  DISPLAY: css`
    color: ${Colors.UI_TEXT_MAIN};
    font-family: ${TypeFace.BASE};
    font-size: ${TextSize.X_LARGE}rem;
    font-weight: 500;
    line-height: ${LineHeight.NORMAL};
  `,
  SUB: css`
    color: ${Colors.UI_TEXT_SUB};
    font-family: ${TypeFace.BASE};
    font-size: ${TextSize.SMALL}rem;
  `,
  EXTENDED: css`
    transform: scale(1, 0.9);
  `,
} as const;

export const Typography = {
  TextSize,
  TypeFace,
  LineHeight,
  Mixin,
} as const;

export default Typography;
