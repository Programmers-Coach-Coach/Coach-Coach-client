import IconButton from "@/components/Icon/IconButton";
import { slideAnimation } from "@/utils/animation";
import { styled } from "styled-components";

interface AddModalProps {
  openHandler: () => void;
}

const AddModal = ({ openHandler }: AddModalProps) => {
  return (
    <AddModalStyle>
      <AboveModal>
        <AddModalCard>새 루틴 추가하기</AddModalCard>
        <AddModalCard>기존 루틴 복사하기</AddModalCard>
      </AboveModal>
      <IconButton
        name="close"
        size="60px"
        color="primary"
        onClick={openHandler}
      />
    </AddModalStyle>
  );
};

const AddModalStyle = styled.div`
  position: relative;
  top: -60px;
  right: -40px;
  z-index: 1001; /* BlurStyle 위에 표시되도록 설정 */
`;

const AddModalCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 140px;
  margin-bottom: 10px;
  position: relative;
  left: -80px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const AboveModal = styled.div`
  animation: ${slideAnimation("-20%", 0)} 0.3s forwards;
`;

export default AddModal;
