import { createGlobalStyle } from 'styled-components';
import { TYPOGRAPHY } from '@/constants';

export const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Sawarabi+Gothic&display=swap'); */
  
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${TYPOGRAPHY.MIXIN.BASE}
  }

  button {
    ${TYPOGRAPHY.MIXIN.BASE}
  }
`;

export default GlobalStyle;
