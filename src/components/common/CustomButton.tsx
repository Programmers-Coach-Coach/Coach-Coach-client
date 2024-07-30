import styled from "styled-components";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  size: "small" | "large";
  variant: "contained" | "outlined";
  children: string;
  onClick?: () => void;
}

const StyledButton = styled(Button)<{
  size: "small" | "large";
  variant: "contained" | "outlined";
}>`
  && {
    background-color: ${({ theme, variant }) =>
      variant === "contained" ? theme.color.yellow : "transparent"};
    color: ${({ theme, variant }) =>
      variant === "contained" ? theme.color.white : theme.color.yellow};
    border: ${({ theme, variant }) =>
      variant === "outlined" ? `1px solid ${theme.color.yellow}` : "none"};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    &:hover {
      background-color: ${({ theme, variant }) =>
        variant === "contained" ? theme.color.yellow : "transparent"};
      border-color: ${({ theme, variant }) =>
        variant === "outlined" ? theme.color.yellow : "none"};
    }

    ${({ size }) =>
      size === "small" &&
      `
        padding: 16px;
        height: 32px;
      `}

    ${({ size }) =>
      size === "large" &&
      `
        width: 314px;
        height: 48px;
      `}
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
