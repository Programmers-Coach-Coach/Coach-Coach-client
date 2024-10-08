import { ICONS } from "@/constants/assets";
import { ColorKey, theme } from "@/style/theme";
import { styled } from "styled-components";

interface IconProps {
  name: keyof typeof ICONS;
  size: string;
  color: ColorKey;
  onClick?: () => void;
}

const Icon = ({ name, size, color, onClick }: IconProps) => {
  const SelectedIcon = ICONS[name];
  const ICColor = theme.color[color];

  return (
    <IconStyle>
      <SelectedIcon size={size} color={ICColor} onClick={onClick} />
    </IconStyle>
  );
};

const IconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Icon;
