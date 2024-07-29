import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const SubModal = ({ children }: Props) => {
  return <SubModalStyle>{children}</SubModalStyle>;
};

const SubModalStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.color.semiTransparentBlack};
`;
export default SubModal;
