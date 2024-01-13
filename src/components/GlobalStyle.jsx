import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing:border-box;
  }
  body {
    font-family: 'Hi Melody', sans-serif;
    background:#EBDDF5;
  }
`;

export default GlobalStyle;
