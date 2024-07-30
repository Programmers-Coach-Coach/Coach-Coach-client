import styled from "styled-components";
import { TModal, modal as modalData } from "../../../../data/modal";
import useOverlayClick from "@/hooks/useOverlayClick";

interface Props {
  children: React.ReactNode;
  schema: TModal;
  closeModal: () => void;
  overlayDisabled?: boolean; // TRUE: 사용자가 모달 외부의 오버레이 영역을 클릭해도 안닫힌다, FALSE: 닫힌다.
}

const CenterModal = ({
  children,
  schema,
  closeModal,
  overlayDisabled = false
}: Props) => {
  const { primaryButton, secondaryButton } = modalData[schema];
  const { modalRef, overlayClick } = useOverlayClick(
    closeModal,
    overlayDisabled
  );

  return (
    <CenterModalStyle onClick={overlayClick}>
      <Contents ref={modalRef}>
        <Main>{children}</Main>
        <Footer>
          <button onClick={closeModal}>{secondaryButton}</button>
          <button>{primaryButton}</button>
        </Footer>
      </Contents>
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

const Contents = styled.div`
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
  background-color: ${({ theme }) => theme.color.semiTransparentBlack};
  z-index: 1000;
`;

const Main = styled.div``;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  button:first-of-type {
    color: inherit;
  }
  button:nth-of-type(2) {
    color: ${({ theme }) => theme.color.yellow};
  }
`;

export default CenterModal;
