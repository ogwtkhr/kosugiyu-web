import { createGlobalStyle } from 'styled-components';
import { Typography, Colors } from '@/constants';

export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    &.is-cropped {
      overflow: hidden;
    }
  }

  body {
    ${Typography.Mixin.BASE};
    background-color: ${Colors.UI_PAPER};

    .is-cropped & {
      overflow: hidden;
    }
  }

  button {
    padding: 0;
    border: none;
    outline: none;
    /* TODO
    appearance: none;
     */
    background-color: transparent;
    cursor: pointer;
    ${Typography.Mixin.BASE}
  }
`;

export default GlobalStyle;
