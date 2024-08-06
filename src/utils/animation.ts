import { keyframes } from "styled-components";

export const slideAnimation = (
  from: string | number,
  to: string | number
) => keyframes`
  from {
    transform: translateY(${from});
  }
  to {
    transform: translateY(${to});
  }
`;
