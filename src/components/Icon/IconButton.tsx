import { ICONS } from "@/constants/assets";
import { ColorKey } from "@/style/theme";
import { HTMLAttributes } from "react";
import Icon from "./Icon";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  name: keyof typeof ICONS;
  size: string;
  color: ColorKey;
  onClick?: () => void;
}

const IconButton = ({ name, size, color, onClick, ...props }: Props) => {
  return (
    <button {...props}>
      <Icon name={name} color={color} size={size} onClick={onClick} />
    </button>
  );
};

export default IconButton;
