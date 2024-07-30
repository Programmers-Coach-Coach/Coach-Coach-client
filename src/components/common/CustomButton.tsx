import styled from "styled-components";
import Button from "@mui/material/Button";
import { theme } from "../../style/theme"; // theme.ts 파일 경로

interface CustomButtonProps {
  size: "small" | "large";
  variant: "contained" | "outlined";
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled(Button)<{
  size: "small" | "large";
  variant: "contained" | "outlined";
}>`
  && {
    background-color: ${({ variant }) =>
      theme.buttonVariant[variant].backgroundColor};
    color: ${({ variant }) => theme.buttonVariant[variant].color};
    border: ${({ variant }) => theme.buttonVariant[variant].border};
    border-radius: ${theme.borderRadius.default};
    padding: ${({ size }) => theme.button[size].padding};
    height: ${({ size }) => theme.button[size].height};
    width: ${({ size }) => theme.button[size].width || "auto"};

    &:hover {
      background-color: ${({ variant }) =>
        theme.buttonVariant[variant].backgroundColor};
      border-color: ${({ variant }) =>
        theme.buttonVariant[variant].borderHoverColor};
    }
  }
`;

const CustomButton = ({
  size,
  variant,
  children,
  onClick
}: CustomButtonProps) => {
  return (
    <StyledButton size={size} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
