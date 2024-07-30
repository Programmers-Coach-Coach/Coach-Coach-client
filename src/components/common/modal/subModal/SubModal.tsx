import React from "react";
import { useRef } from "react";

import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
}

const SubModal = ({ children, closeModal }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const overlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  return (
    <SubModalStyle onClick={overlayClick}>
      <Contents ref={modalRef}>{children}</Contents>
    </SubModalStyle>
  );
};

const SubModalStyle = styled.div`
  position: fixed;
  inset: 0;
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%);

  width: 100%;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.color.semiTransparentBlack};
  z-index: 1000;
`;
export default SubModal;
