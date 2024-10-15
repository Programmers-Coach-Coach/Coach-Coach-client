import { keyframes, styled } from "styled-components";
import RoutineInput from "../common/InputField/Text/RoutineInput";
import { WhiteSpace } from "@/style/global";
import { useState } from "react";

interface IAction {
  id: number;
  name: string;
  times: number;
  sets: number;
}

interface AddActionProps {
  index: number;
  setActions: React.Dispatch<React.SetStateAction<IAction[]>>;
}

const AddAction = ({ index, setActions }: AddActionProps) => {
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const label = `운동 ${index + 1}`;

  const onClickDelete = () => {
    setActions((prevActions) => {
      prevActions.splice(index, 1);
      return [...prevActions];
    });
  };

  return (
    <AddActionStyle>
      <RoutineInput
        label={label}
        placeholder="상세 운동을 입력해 주세요"
        isAction={true}
        isToggleOpen={isToggleOpen}
        setIsToggleOpen={setIsToggleOpen}
        onClickDelete={onClickDelete}
      />
      {isToggleOpen && (
        <ActionDetailStyle $isToggleOpen={isToggleOpen}>
          <WhiteSpace $height={10} />
          <RoutineInput
            label="반복"
            placeholder="운동 반복 기간을 설정해 주세요"
            isSelect={true}
            isSmall={true}
          />
          <WhiteSpace $height={10} />
          <RoutineInput
            label="상세기록"
            placeholder="ex)운동 횟수/분, 세트"
            isSelect={true}
            isSmall={true}
          />
        </ActionDetailStyle>
      )}
      <WhiteSpace $height={30} />
    </AddActionStyle>
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