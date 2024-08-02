import styled, { createGlobalStyle } from "styled-components";

interface WhiteSpaceProps {
  $width?: number;
  $height?: number;
}
interface BackgroundDimmedProps {
  $borderRadius?: string;
}

interface LineClamp {
  $line: number;
  $fontSize?: string;
  $color?: string;
  $lineHeight?: string;
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin : 0;
        padding : 0;
        box-sizing: border-box;
    }
    body {
        color: ${({ theme }) => theme.color.text};
        font-family: 'Pretendard', sans-serif;
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

export const WhiteSpace = styled.div<WhiteSpaceProps>`
  width: ${({ $width }) => ($width ? `${$width}px` : "100%")};
  height: ${({ $height }) => ($height ? `${$height}px` : "100%")};
`;

export const BackgroundDimmed = styled.div<BackgroundDimmedProps>`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.color.lightTransparentBlack};
  border-radius: ${({ $borderRadius, theme }) =>
    $borderRadius || theme.borderRadius.default};
`;

export const LineClamp = styled.p<LineClamp>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $line }) => $line};
  -webkit-box-orient: vertical;

  font-size: ${({ $fontSize = "inherit" }) => $fontSize};
  color: ${({ $color = "inherit" }) => $color};
  line-height: ${({ $lineHeight = "normal" }) => $lineHeight};
`;
