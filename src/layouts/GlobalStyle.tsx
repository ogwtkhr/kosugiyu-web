import { createGlobalStyle } from 'styled-components';
import { Typography } from '@/constants';

export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${Typography.Mixin.BASE}
  }

  button {
    ${Typography.Mixin.BASE}
  }
`;

export default GlobalStyle;
