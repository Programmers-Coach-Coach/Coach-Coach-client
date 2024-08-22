import { styled } from "styled-components";
import InputInModal from "../../InputField/Text/InputInModal";
import { useModalInfo } from "@/store/modalInfo.store";

const ActionContent = () => {
  const actionName = useModalInfo((state) => state.actionName);
  const setActionName = useModalInfo((state) => state.setActionName);

  const countOrMinutes = useModalInfo((state) => state.countOrMinutes);
  const setCountOrMinutes = useModalInfo((state) => state.setCountOrMinutes);

  const sets = useModalInfo((state) => state.sets);
  const setSets = useModalInfo((state) => state.setSets);

  const description = useModalInfo((state) => state.description);
  const setDescription = useModalInfo((state) => state.setDescription);

  return (
    <ActionContentStyle>
      <h2>운동명</h2>
      <InputInModal name={actionName} content="종목" setFn={setActionName} />
      <h2>횟수/시간</h2>
      <InputInModal
        name={countOrMinutes}
        content="종목"
        setFn={setCountOrMinutes}
      />
      <h2>세트</h2>
      <InputInModal name={sets} content="종목" setFn={setSets} />
      <h2>주의사항</h2>
      <InputInModal name={description} content="종목" setFn={setDescription} />
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
