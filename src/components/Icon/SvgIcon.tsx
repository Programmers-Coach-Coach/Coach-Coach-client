import { ICONS } from "@/constants/assets";
import { ColorKey, theme } from "@/style/theme";
import { HTMLAttributes } from "react";
import { styled } from "styled-components";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: keyof typeof ICONS;
  width?: string; // 너비
  height?: string; // 높이
  stroke?: ColorKey | string; // 테두리 색상
  fill?: ColorKey | string; // 채우기 색상
  isButton?: boolean; // 버튼 여부
}

const SvgIcon = ({
  name,
  width = "23px",
  height = "23px",
  stroke = "none",
  fill = "none",
  ...props
}: IconProps) => {
  const SelectedIcon = ICONS[name];

  const icStroke =
    stroke in theme.color ? theme.color[stroke as ColorKey] : stroke;
  const icFill = fill in theme.color ? theme.color[fill as ColorKey] : fill;

  const icon = (
    <SelectedIcon
      width={width}
      height={height}
      stroke={icStroke}
      fill={icFill}
    />
  );

  return <IconStyle {...props}>{icon}</IconStyle>;
};

const IconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SvgIcon;
