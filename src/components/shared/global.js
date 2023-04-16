import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    html, body {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    h1,
    h2, 
    h3, 
    p {
        margin: 0; 
        padding: 0
    }
`;
