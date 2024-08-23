import { ICONS } from "@/constants/assets";
import { ColorKey, theme } from "@/style/theme";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  name: keyof typeof ICONS;
  size: string;
  color: ColorKey;
}

const IconButton = ({ name, size, color, ...props }: Props) => {
  const SelectedIcon = ICONS[name];
  const ICColor = theme.color[color];

  return (
    <button {...props}>
      <SelectedIcon size={size} color={ICColor} />
    </button>
  );
};

export default IconButton;
