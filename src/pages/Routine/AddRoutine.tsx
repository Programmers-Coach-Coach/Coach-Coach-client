import RoutineInput from "@/components/common/InputField/Text/RoutineInput";
import OneButtonContent from "@/components/common/modal/contents/OneButtonContent";
import SportsContent from "@/components/common/modal/contents/SportsContent";
import Modal from "@/components/common/modal/Modal";
import AddAction from "@/components/routine/AddAction";
import useModal from "@/hooks/useModal";
import { WhiteSpace } from "@/style/global";
import { useState } from "react";
import toast from "react-hot-toast";
import { styled } from "styled-components";

interface IAction {
  id: number;
  name: string;
  times: number;
  sets: number;
}

const ACTION_COUNT = 4;

const AddRoutine = () => {
  const [actionId, setActionId] = useState<number>(1);
  const [actions, setActions] = useState<IAction[]>([]);
  const { isModal, openModal, closeModal } = useModal();

  const onClickAdd = () => {
    if (actions.length < ACTION_COUNT) {
      setActionId((prevId) => prevId + 1);
      setActions((prevActions) => [
        ...prevActions,
        { id: actionId, name: "", times: 0, sets: 0 }
      ]);
    } else {
      toast.error(`운동은 ${ACTION_COUNT}가지 까지 입력가능합니다.`);
    }
  };

  return (
    <>
      {isModal && (
        <Modal closeModal={closeModal} position="footer-above">
          <OneButtonContent title="운동 종목 선택" buttonText="선택완료">
            <SportsContent />
          </OneButtonContent>
        </Modal>
      )}
      <AddRoutineStyle>
        <RoutineInput
          label="루틴 이름"
          placeholder="루틴 이름을 입력해 주세요"
        />
        <WhiteSpace $height={10} />
        <RoutineInput
          label="종목"
          placeholder="운동 종목을 선택해 주세요"
          isSelect={true}
          onClickHandler={openModal}
        />
        <WhiteSpace $height={20} />
        <UnderlineStyle />
        <p onClick={onClickAdd}>+운동 추가 하기</p>
        {actions.map((action, index) => (
          <AddAction key={action.id} index={index} setActions={setActions} />
        ))}
      </AddRoutineStyle>
    </>
  );
};

const AddRoutineStyle = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 80px;

  p {
    margin: 2vw 4vw 1.3vw 0;
    font-size: 3vw;
    color: #0075ff;
    font-weight: bold;
    align-self: flex-end;
    cursor: pointer;

    @media (min-width: 600px) {
      margin: 12px 16px 8px 0;
      font-size: 14px;
    }
  }
`;

const UnderlineStyle = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 3%;
    width: 94%;
    height: 0.08rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export default AddRoutine;
