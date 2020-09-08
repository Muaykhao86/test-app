import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Css Reset */
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html{
    box-sizing: border-box;
    font-size: 62.5%;
}

body{
    font-family: ${(props) => props.theme.ppRegular};    
}
`;
export default GlobalStyle;
