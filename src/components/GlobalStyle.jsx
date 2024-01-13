import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *, *::before, *::after {
    box-sizing:border-box;
  }
  body{
        padding: 0;
        margin: 0;
        font-family: 'Gaegu', sans-serif;
        background:#EBDDF5;
    };
    button{
        background:none;
        outline:none;
        border:none;
        cursor:pointer;
    };
    input{
        background:none;
        outline:none;
        border:none;
        font-family: 'Gaegu', sans-serif;
    }
`;

export default GlobalStyle;
