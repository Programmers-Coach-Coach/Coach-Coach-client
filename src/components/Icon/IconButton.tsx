import { ICONS } from "@/constants/assets";
import { ColorKey, theme } from "@/style/theme";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: keyof typeof ICONS;
  size: string;
  color: ColorKey;
}

const IconButton = ({ name, size, color, ...props }: Props) => {
  const SelectedIcon = ICONS[name];
  const ICColor = theme.color[color];

  return (
    <StyledButton {...props}>
      <SelectedIcon size={size} color={ICColor} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default IconButton;
