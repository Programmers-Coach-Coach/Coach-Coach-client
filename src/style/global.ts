import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        padding : 0;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.color.background};
    }
`;
