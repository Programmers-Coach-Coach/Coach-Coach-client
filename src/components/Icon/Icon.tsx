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

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 전파 중단
    if (onClick) {
      onClick();
    }
  };

  return (
    <IconStyle>
      <SelectedIcon size={size} color={ICColor} onClick={handleClick} />
    </IconStyle>
  );
};

const IconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Icon;
