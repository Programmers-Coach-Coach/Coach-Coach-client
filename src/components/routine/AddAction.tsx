import { keyframes, styled } from "styled-components";
import RoutineInput from "../common/InputField/Text/RoutineInput";
import { WhiteSpace } from "@/style/global";
import { useState } from "react";
import useModal from "@/hooks/useModal";
import Modal from "../common/modal/Modal";
import OneButtonContent from "../common/modal/contents/OneButtonContent";
import TimeSetContent from "../common/modal/contents/TimeSetContent";
import { useRoutineStore } from "@/store/routine.store";

interface Action {
  actionId: number | string;
  actionName: string;
  sets: number | string;
  countsOrMinutes: number | string;
}

interface AddActionProps {
  index: number;
  action: Action;
}

const AddAction = ({ index, action }: AddActionProps) => {
  const setAction = useRoutineStore((set) => set.setAction);
  const removeAction = useRoutineStore((set) => set.removeAction);
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const timeSetModal = useModal();
  const label = `운동 ${index + 1}`;

  const onClickDelete = () => {
    removeAction(index);
  };

  const timeSetText =
    action.countsOrMinutes !== 0 && action.sets !== 0
      ? `${action.countsOrMinutes}회/분 | ${action.sets}회`
      : "";

  return (
    <>
      {timeSetModal.isModal && (
        <Modal closeModal={timeSetModal.closeModal} position="footer-above">
          <OneButtonContent title="상세 기록" buttonText="선택완료">
            <TimeSetContent
              index={index}
              closeModal={timeSetModal.closeModal}
            />
          </OneButtonContent>
        </Modal>
      )}
      <AddActionStyle>
        <RoutineInput
          label={label}
          placeholder="상세 운동을 입력해 주세요"
          value={action.actionName}
          index={index}
          setAction={setAction}
          isAction={true}
          isToggleOpen={isToggleOpen}
          setIsToggleOpen={setIsToggleOpen}
          onClickDelete={onClickDelete}
        />
        {isToggleOpen && (
          <ActionDetailStyle $isToggleOpen={isToggleOpen}>
            <WhiteSpace $height={10} />
            <RoutineInput
              label="상세기록"
              placeholder="ex)운동 횟수/분, 세트"
              value={timeSetText}
              isSelect={true}
              isSmall={true}
              onClickHandler={timeSetModal.openModal}
            />
          </ActionDetailStyle>
        )}
        <WhiteSpace $height={30} />
      </AddActionStyle>
    </>
  );
};

const AddActionStyle = styled.div``;

const ActionDetailStyle = styled.div<{ $isToggleOpen: boolean }>`
  overflow: hidden;
  animation: ${({ $isToggleOpen }) => ($isToggleOpen ? slideDown : slideUp)}
    0.3s ease-in-out forwards;
`;

const slideDown = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1000px;
  }
`;

const slideUp = keyframes`
  0% {
    max-height: 1000px;
  }
  100% {
    max-height: 0;
  }
`;

export default AddAction;
