import SvgIcon from "@/components/Icon/SvgIcon";
import { ICONS } from "@/constants/assets";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  imgName: keyof typeof ICONS;
  children: ReactNode;
  height: string;
}

const EmptyVersion2 = ({ imgName, children, height }: Props) => {
  return (
    <Wrapper $height={height}>
      <SvgIcon name={imgName} />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $height: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: center;
  height: ${({ $height }) => $height};

  font-size: 15px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.375px;
`;
export default EmptyVersion2;
