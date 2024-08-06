import styled from "styled-components";
import Button from "@mui/material/Button";
import { ButtonSize, CustomButtonType } from "@/style/theme"; // theme.ts 파일 경로

interface CustomButtonProps {
  size: ButtonSize;
  variant: CustomButtonType;
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled(Button)<{
  size: ButtonSize;
  variant: CustomButtonType;
}>`
  && {
    background-color: ${({ variant, theme }) =>
      theme.buttonVariant[variant].backgroundColor};
    color: ${({ variant, theme }) => theme.buttonVariant[variant].color};
    border: ${({ variant, theme }) => theme.buttonVariant[variant].border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: ${({ size, theme }) => theme.button[size].padding};
    height: ${({ size, theme }) => theme.button[size].height};
    width: ${({ size, theme }) => theme.button[size].width || "auto"};

    &:hover {
      background-color: ${({ variant, theme }) =>
        theme.buttonVariant[variant].backgroundColor};
      border-color: ${({ variant, theme }) =>
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
