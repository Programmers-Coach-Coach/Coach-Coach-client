import { styled } from "styled-components";
import Card from "@/components/common/Card/Card";
import Icon from "@/components/Icon/Icon";
import useModal from "@/hooks/useModal";
import { useState } from "react";
import Modal from "@/components/common/modal/Modal";
import ActionModalInner from "@/components/common/modal/contents/ActionModalInner";
import RoutineContents from "@/components/common/modal/contents/RoutineContents";
import { SPORTS_NAMES } from "@/constants/sportsConstants";
import { useModalInfo } from "@/store/modalInfo.store";
import RoutinePicker from "../common/modal/contents/RoutinePicker";
import { useLocation, useNavigate } from "react-router-dom";

interface RoutineProps {
  id: number;
  name: string;
  sportId: number;
}

const Routine = ({ id, name, sportId }: RoutineProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const modifyModal = useModal();
  const deleteModal = useModal();
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const setRoutineId = useModalInfo((state) => state.setRoutineId);

  const onClickModify = () => {
    setRoutineId(id);
    modifyModal.openModal();
  };

  const onClickDelete = () => {
    setRoutineId(id);
    deleteModal.openModal();
  };

  return (
    <>
      {modifyModal.isModal && (
        <Modal
          closeModal={modifyModal.closeModal}
          overlayDisabled={isSelect}
          position="center"
        >
          <ActionModalInner
            schema="routine-modify"
            closeModal={modifyModal.closeModal}
          >
            <RoutineContents setIsSelect={setIsSelect} />
          </ActionModalInner>
        </Modal>
      )}
      {deleteModal.isModal && (
        <Modal closeModal={deleteModal.closeModal} position="footer-above">
          <RoutinePicker schema="delete" closeModal={deleteModal.closeModal} />
        </Modal>
      )}
      <Card>
        <RoutineStyle
          onClick={() => {
            setRoutineId(id);
            navigate(`/routine/detail/${id}?routineName=${name}`);
          }}
        >
          <RoutineTextStyle>
            <h2>{name}</h2>
            <p className="b2">{SPORTS_NAMES[sportId]}</p>
          </RoutineTextStyle>
          {!queryParams.get("coach") && (
            <RoutineIconStyle>
              <Icon
                name="modify"
                size="20px"
                color="review"
                onClick={onClickModify}
              />
              <Icon
                name="delete"
                size="20px"
                color="error"
                onClick={onClickDelete}
              />
            </RoutineIconStyle>
          )}
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
