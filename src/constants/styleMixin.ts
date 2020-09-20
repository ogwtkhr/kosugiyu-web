import { css } from 'styled-components';

export const StyleMixin = {
  BUTTON_RESET: css`
    padding: 0;
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  `,
} as const;

export default StyleMixin;
