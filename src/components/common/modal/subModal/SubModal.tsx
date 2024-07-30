import useOverlayClick from "@/hooks/useOverlayClick";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
  overlayDisabled?: boolean; // TRUE: 사용자가 모달 외부의 오버레이 영역을 클릭해도 안닫힌다, FALSE: 닫힌다.
}

const SubModal = ({ children, closeModal, overlayDisabled = false }: Props) => {
  const { modalRef, overlayClick } = useOverlayClick(
    closeModal,
    overlayDisabled
  );

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
