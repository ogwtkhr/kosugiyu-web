import { createGlobalStyle } from 'styled-components';
import { TypographyMixin, Colors } from '@/constants';

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
    ${TypographyMixin.BASE};
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
    ${TypographyMixin.BASE}
  }
`;

export default GlobalStyle;
