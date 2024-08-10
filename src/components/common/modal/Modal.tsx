import styled from "styled-components";
import useOverlayClick from "@/hooks/useOverlayClick";
import { slideAnimation } from "@/utils/animation";

type Position = "center" | "footer-above";

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
  position: Position; // 모달을 띄울 위치
  overlayDisabled?: boolean; // TRUE: 사용자가 모달 외부의 오버레이 영역을 클릭해도 안닫힌다, FALSE: 닫힌다.
}

const Modal = ({
  children,
  closeModal,
  position,
  overlayDisabled = false
}: Props) => {
  const { modalRef, overlayClick } = useOverlayClick(
    closeModal,
    overlayDisabled
  );

  return (
    <CenterModalStyle onClick={overlayClick}>
      {position === "center" && (
        <CenterContents ref={modalRef}>{children}</CenterContents>
      )}
      {position === "footer-above" && (
        <FooterAboveContents ref={modalRef}>{children}</FooterAboveContents>
      )}
    </CenterModalStyle>
  );
};

const CenterModalStyle = styled.div`
  position: fixed;
  inset: 0;
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
`;

const CenterContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 352px;
  padding: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 1000;
`;

const FooterAboveContents = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 60px;
  animation: ${slideAnimation("50%", 0)} 0.3s forwards;

  width: 100%;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.color.box};
  z-index: 1000;
`;

export default Modal;
