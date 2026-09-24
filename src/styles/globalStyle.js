import { createGlobalStyle } from "styled-components";
import { pxToRem } from "../utils/pxToRem";

export const GlobalStyle = createGlobalStyle`
    body, html {
        background-color: #0F1624;
        color: #FFF;
        font-family: "Poppins", sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: ${pxToRem(16)};
        scroll-behavior: smooth;
    }

    h1, h2, ul, li, p, a {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .flex-center {
        display: flex;
        align-items: center;
    }
`;
