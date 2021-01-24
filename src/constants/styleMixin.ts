import { ScreenType } from './screen';
import { Colors } from './colors';
import { TextSize, TextWeight, Typography } from './typography';
import { css } from 'styled-components';
import Opacity from './opacity';
import Transitions from './transitions';
import { calcResponsivePoint } from '@/util/style';
import media from 'styled-media-query';
import { ModuleWidth, Spacing } from './spacing';

export const getResponsiveOffsetMixin = ({
  maxWidth,
  margin,
  marginSmall,
}: {
  maxWidth?: number;
  margin?: number;
  marginSmall?: number;
} = {}): any => {
  return css`
    max-width: ${maxWidth}px;
    margin-left: auto;
    margin-right: auto;
    ${media.lessThan(calcResponsivePoint(maxWidth, margin))`
      margin-left: ${margin}px;
      margin-right: ${margin}px;
    `}

    ${media.lessThan(ScreenType.MEDIUM)`
      ${
        marginSmall
          ? css`
              margin-left: ${marginSmall}px;
              margin-right: ${marginSmall}px;
            `
          : ''
      }
    `}
  `;
};

const BASE_BACKGROUND_IMAGE = css`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StyleMixin = {
  BUTTON_RESET: css`
    padding: 0;
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  `,
  BACKGROUND_IMAGE: BASE_BACKGROUND_IMAGE,
  BACKGROUND_IMAGE_WITH_SRC: css`
    ${BASE_BACKGROUND_IMAGE};
    background-image: ${({ src }: { src: string }) => `url(${src})`};
  `,
  HOVER_EFFECT: {
    NORMAL: css`
      transition: opacity ${Transitions.HOVER_TRANSITION_NORMAL};
      opacity: 1;

      &:hover {
        opacity: ${Opacity.HOVER_NORMAL};
      }
    `,
    ZOOM_IN: css`
      transition: transform ${Transitions.HOVER_TRANSITION_NORMAL};
      transform: scale(1);

      &:hover {
        transform: scale(1.01);
      }
    `,
  },
  RESPONSIVE_OFFSET: css`
    ${getResponsiveOffsetMixin({
      maxWidth: ModuleWidth.SEMI_WIDE,
      margin: Spacing.XXX_LARGE,
      marginSmall: Spacing.LARGE,
    })}
  `,
} as const;

export default StyleMixin;
