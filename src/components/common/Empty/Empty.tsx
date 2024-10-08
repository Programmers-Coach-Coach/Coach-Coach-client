import Icon from "@/components/Icon/Icon";
import { ICONS } from "@/constants/assets";
import { ColorKey } from "@/style/theme";
import { styled } from "styled-components";

interface EmptyProps {
  name: keyof typeof ICONS;
  size: string;
  color: ColorKey;
  descriptions: string;
  padding?: string;
}

const Empty = ({ name, size, color, descriptions, padding }: EmptyProps) => {
  const paddingTop = padding ? padding : "100px";
  return (
    <EmptyStyle padding={paddingTop}>
      <Icon name={name} size={size} color={color} />
      <Message $color={color}>{descriptions}</Message>
    </EmptyStyle>
  );
};

const EmptyStyle = styled.div<{ padding: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: ${({ padding }) => padding};
  margin: 0 auto;
`;

const Message = styled.h2<{ $color: string }>`
  color: ${({ theme, $color }) => theme.color[$color]};
`;

export default Empty;
