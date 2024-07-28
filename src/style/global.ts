import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        src: url('https://cdn.jsdelivr.net/npm/pretendard@1.3.5/dist/web/static/pretendard.css');
    }
    body {
        padding : 0;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.color.background};
        font-family: 'Pretendard', sans-serif;
    }
`;
