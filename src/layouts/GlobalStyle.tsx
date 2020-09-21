import { createGlobalStyle } from 'styled-components';
import { Typography, Colors } from '@/constants';

export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${Typography.Mixin.BASE};
    background-color: ${Colors.UI_PAPER};
  }

  button {
    ${Typography.Mixin.BASE}
  }
`;

export default GlobalStyle;
