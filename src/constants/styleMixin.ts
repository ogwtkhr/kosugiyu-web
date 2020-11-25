import { css } from 'styled-components';
import Opacity from './opacity';
import Transitions from './transitions';

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
  },
} as const;

export default StyleMixin;
