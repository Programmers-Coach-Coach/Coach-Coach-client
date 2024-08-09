import styled from "styled-components";
import Button from "@mui/material/Button";
import { theme } from "../../../style/theme"; // theme.ts 파일 경로

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "small" | "large" | "full" | "mini";
  variant: "contained" | "outlined";
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled(Button)<CustomButtonProps>`
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

const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  variant,
  children,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton size={size} variant={variant} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
