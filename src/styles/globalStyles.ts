import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  box-sizing: border-box;
}
html, body {
  height: 100%;
}

body{
  min-height:100vh;
  font-family:Verdana;
}

#__next{
  height: 100%;
}
`;
