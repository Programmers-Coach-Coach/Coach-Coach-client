import Icon from "@/components/Icon/Icon";
import { ICONS } from "@/constants/assets";
import { ColorKey } from "@/style/theme";
import { styled } from "styled-components";

interface EmptyProps {
  name: keyof typeof ICONS;
  size: string;
  color: ColorKey;
  descriptions: string;
}

const Empty = ({ name, size, color, descriptions }: EmptyProps) => {
  return (
    <EmptyStyle>
      <Icon name={name} size={size} color={color} />
      <h2>{descriptions}</h2>
    </EmptyStyle>
  );
};

const EmptyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 280px;
  margin: 0 auto;
`;

export default Empty;