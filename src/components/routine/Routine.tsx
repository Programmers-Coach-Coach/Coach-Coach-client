import { styled } from "styled-components";
import Card from "@/components/common/Card/Card";
import Icon from "@/components/Icon/Icon";
import useModal from "@/hooks/useModal";
import { useState } from "react";
import Modal from "@/components/common/modal/Modal";
import ActionModalInner from "@/components/common/modal/contents/ActionModalInner";
import RoutineContents from "@/components/common/modal/contents/RoutineContents";

const Routine = () => {
  const { isModal, openModal, closeModal } = useModal();
  const [isSelect, setIsSelect] = useState<boolean>(false);

  const onClickModify = () => {
    openModal();
  };

  return (
    <>
      {isModal && (
        <Modal
          closeModal={closeModal}
          overlayDisabled={isSelect}
          position="center"
        >
          <ActionModalInner schema="category-modify" closeModal={closeModal}>
            <RoutineContents setIsSelect={setIsSelect} />
          </ActionModalInner>
        </Modal>
      )}
      <Card>
        <RoutineStyle>
          <RoutineTextStyle>
            <h2>3대 500</h2>
            <p className="b2">헬스</p>
          </RoutineTextStyle>
          <RoutineIconStyle>
            <Icon
              name="modify"
              size="20px"
              color="review"
              onClick={onClickModify}
            />
            <Icon name="delete" size="20px" color="error" />
          </RoutineIconStyle>
        </RoutineStyle>
      </Card>
    </>
  );
};

const RoutineStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const RoutineTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
  width: 100%;
  padding-left: 20px;

  h2 {
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.primary};
  }
`;

const RoutineIconStyle = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 100%;

  svg {
    margin-right: 15px;
  }
`;

export default Routine;
