import { styled } from "styled-components";
import InputInModal from "../../InputField/Text/InputInModal";
import { useModalInfo } from "@/store/modalInfo.store";
import InputNumberInModal from "../../InputField/Text/InputNumberInModal";

interface ActionContentProps {
  action?: string;
  actionTime?: number;
  actionCount?: number;
  actionSets?: number;
  actionDes?: string;
}

const ActionContent = ({
  action,
  actionTime,
  actionCount,
  actionSets,
  actionDes
}: ActionContentProps) => {
  const setActionName = useModalInfo((state) => state.setActionName);

  const setMinutes = useModalInfo((state) => state.setMinutes);

  const setCount = useModalInfo((state) => state.setCount);

  const setSets = useModalInfo((state) => state.setSets);

  const setDescription = useModalInfo((state) => state.setDescription);

  return (
    <ActionContentStyle>
      <h2>운동명</h2>
      <InputInModal name={action} content="운동" setFn={setActionName} />
      <h2>시간</h2>
      <InputNumberInModal
        value={actionTime}
        content="시간"
        setFn={setMinutes}
      />
      <h2>횟수</h2>
      <InputNumberInModal value={actionCount} content="횟수" setFn={setCount} />
      <h2>세트</h2>
      <InputNumberInModal value={actionSets} content="세트" setFn={setSets} />
      <h2>운동 가이드</h2>
      <InputInModal
        name={actionDes}
        content="운동 가이드"
        setFn={setDescription}
      />
    </ActionContentStyle>
  );
};

const ActionContentStyle = styled.div`
  width: 100%;
  height: 100%;
  h2 {
    padding: 10px;
  }
`;

export default ActionContent;
