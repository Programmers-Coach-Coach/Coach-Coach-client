import styled from "styled-components";
import Button from "@mui/material/Button";
import { ButtonSize, CustomButtonType } from "@/style/theme"; // theme.ts 파일 경로

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  variant: CustomButtonType;
  children: React.ReactNode;
  onClick?: () => void;
  fontSize?: string; // fontSize 속성을 추가
}

const StyledButton = styled(Button)<CustomButtonProps>`
  && {
    background-color: ${({ variant, theme }) =>
      theme.buttonVariant[variant].backgroundColor};
    color: ${({ variant, theme }) => theme.buttonVariant[variant].color};
    border: ${({ variant, theme }) => theme.buttonVariant[variant].border};
    border-radius: 10px;
    padding: ${({ size, theme }) => theme.button[size].padding};
    height: ${({ size, theme }) => theme.button[size].height};
    width: ${({ size, theme }) => theme.button[size].width || "auto"};
    font-size: ${({ fontSize }) => fontSize || "inherit"};

    &:hover {
      background-color: ${({ variant, theme }) =>
        theme.buttonVariant[variant].backgroundColor};
      border-color: ${({ variant, theme }) =>
        theme.buttonVariant[variant].borderHoverColor};
    }
  }
`;

const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  variant,
  children,
  onClick,
  fontSize, // fontSize를 받아서 StyledButton에 전달
  ...rest
}) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      onClick={onClick}
      fontSize={fontSize}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
