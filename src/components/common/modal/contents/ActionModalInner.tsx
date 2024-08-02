import { TModal } from "@/data/modal";
import styled from "styled-components";
import { modal } from "@/data/modal";

interface Props {
  children: React.ReactNode;
  schema: TModal;
  closeModal: () => void;
}

const ActionModalInner = ({ children, schema, closeModal }: Props) => {
  const { primaryButton, secondaryButton } = modal[schema];

  return (
    <>
      <Main>{children}</Main>
      <Footer>
        <button onClick={closeModal}>{secondaryButton}</button>
        <button>{primaryButton}</button>
      </Footer>
    </>
  );
};

const Main = styled.div``;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  button:first-of-type {
    color: inherit;
  }
  button:nth-of-type(2) {
    color: ${({ theme }) => theme.color.primary};
  }
`;
export default ActionModalInner;
