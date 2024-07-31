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
        box-sizing: border-box;
    }
    body {
        color: ${({ theme }) => theme.color.white}
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
        color: inherit;
    }
    h1 {
        font-size: ${({ theme }) => theme.titleSize.t1.fontSize};
        line-height: ${({ theme }) => theme.titleSize.t1.lineHeight};
        font-weight: ${({ theme }) => theme.titleSize.t1.bold};
    }
    h2 {
        font-size: ${({ theme }) => theme.titleSize.t2.fontSize};
        line-height: ${({ theme }) => theme.titleSize.t2.lineHeight};
        font-weight: ${({ theme }) => theme.titleSize.t2.bold};
    }
    
    .b1 {
        font-size: ${({ theme }) => theme.bodySize.b1.fontSize};
        line-height: ${({ theme }) => theme.bodySize.b1.lineHeight};
        font-weight: ${({ theme }) => theme.bodySize.b1.bold};
    }

    .b2 {
        font-size: ${({ theme }) => theme.bodySize.b2.fontSize};
        line-height: ${({ theme }) => theme.bodySize.b2.lineHeight};
        font-weight: ${({ theme }) => theme.bodySize.b2.bold};
    }

    .b3 {
        font-size: ${({ theme }) => theme.bodySize.b3.fontSize};
        line-height: ${({ theme }) => theme.bodySize.b3.lineHeight};
        font-weight: ${({ theme }) => theme.bodySize.b3.bold};
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

`;
