import styled from "styled-components";
import { TModal, modal as modalData } from "../../../../data/modal";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  schema: TModal;
  closeModal: () => void;
}

const CenterModal = ({ children, schema, closeModal }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const overlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const { primaryButton, secondaryButton } = modalData[schema];

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
