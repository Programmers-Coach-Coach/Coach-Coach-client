import { ICONS } from "@/constants/assets";
import { ColorKey } from "@/style/theme";
import { HTMLAttributes } from "react";
import Icon from "./Icon";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  name: keyof typeof ICONS;
  size: string;
  color: ColorKey;
}

const IconButton = ({ name, size, color, ...props }: Props) => {
  return (
    <button {...props}>
      <Icon name={name} color={color} size={size} />
    </button>
  );
};

export default IconButton;
