import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        src: url('https://cdn.jsdelivr.net/npm/pretendard@1.3.5/dist/web/static/pretendard.css') format('font-woff2');
    }
    * {
        margin : 0;
        padding : 0;
    }
`;
