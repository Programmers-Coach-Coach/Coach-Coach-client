import useOverlayClick from "@/hooks/useOverlayClick";
import { slideAnimation } from "@/utils/animation";
import styled from "styled-components";

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
    <ModalStyle onClick={overlayClick}>
      {position === "center" && (
        <CenterContents ref={modalRef}>{children}</CenterContents>
      )}
      {position === "footer-above" && (
        <FooterAboveContents ref={modalRef}>{children}</FooterAboveContents>
      )}
    </ModalStyle>
  );
};

const ModalStyle = styled.div`
  position: fixed;
  inset: 0;
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  z-index: 1000;
  background: rgba(101, 104, 104, 0.5);
`;

const CenterContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.box};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 1px solid ${({ theme }) => theme.color.gray1};
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  border-radius: ${({ theme }) => theme.borderRadius.default}
    ${({ theme }) => theme.borderRadius.default} 0 0;
  border-top: 1px solid ${({ theme }) => theme.color.gray1};
  border-left: 1px solid ${({ theme }) => theme.color.gray1};
  border-right: 1px solid ${({ theme }) => theme.color.gray1};
  background-color: ${({ theme }) => theme.color.background};
  z-index: 1000;
`;

export default Modal;
