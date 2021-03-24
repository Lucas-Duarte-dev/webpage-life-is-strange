import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Nanum Brush Script", sans-serif;
    }
    button {
        cursor: pointer;
        border: none;

    }

    *, a {
        text-decoration: none;
    }

`;
