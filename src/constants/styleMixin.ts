import { css } from 'styled-components';

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
} as const;

export default StyleMixin;
