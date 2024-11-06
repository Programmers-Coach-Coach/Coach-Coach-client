import { SportChipType, Sports } from "@/style/theme";
import styled from "styled-components";

interface Props {
  sportId: Sports;
  sportName: string;
  size: SportChipType;
}
const SportChip = ({ sportId, sportName, size }: Props) => {
  return (
    <Wrapper $id={sportId} $size={size}>
      # {sportName}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $id: Sports; $size: SportChipType }>`
  font-size: ${({ theme, $size }) => theme.sportChip[$size].fontSize};
  font-weight: ${({ theme, $size }) => theme.sportChip[$size].fontWeight};
  line-height: ${({ theme, $size }) => theme.sportChip[$size].lineHeight};
  letter-spacing: ${({ theme, $size }) => theme.sportChip[$size].letterSpacing};

  padding: 1.5px 10px;
  border-radius: 20px;
  background-color: ${({ theme, $id }) => theme.sports[$id]};
`;
export default SportChip;
