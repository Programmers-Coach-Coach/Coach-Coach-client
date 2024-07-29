import styled from "styled-components";
import { TModal, modal as modalData } from "../../../../data/modal";

interface Props {
  children: React.ReactNode;
  schema: TModal;
}

const CenterModal = ({ children, schema }: Props) => {
  const { button } = modalData[schema];

  return (
    <CenterModalStyle>
      <Main>{children}</Main>
      <Footer>
        <button>취소</button>
        <button>{button}</button>
      </Footer>
    </CenterModalStyle>
  );
};

const CenterModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 352px;
  padding: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.semiTransparentBlack};
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
