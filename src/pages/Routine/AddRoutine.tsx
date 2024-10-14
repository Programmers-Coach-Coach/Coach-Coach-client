import RoutineInput from "@/components/common/InputField/Text/RoutineInput";
import AddAction from "@/components/routine/AddAction";
import { WhiteSpace } from "@/style/global";
import { useState } from "react";
import { styled } from "styled-components";

const AddRoutine = () => {
  const [actionCount, setActionCount] = useState<number>(0);

  const onClickAdd = () => {
    setActionCount((prevCount) => prevCount + 1);
  };

  return (
    <AddRoutineStyle>
      <RoutineInput label="루틴 이름" placeholder="루틴 이름을 입력해 주세요" />
      <WhiteSpace $height={10} />
      <RoutineInput
        label="종목"
        placeholder="운동 종목을 선택해 주세요"
        isSelect={true}
      />
      <WhiteSpace $height={20} />
      <UnderlineStyle />
      <p onClick={onClickAdd}>+운동 추가 하기</p>
      {Array.from({ length: actionCount }).map((_, index) => (
        <AddAction key={index} index={index} />
      ))}
    </AddRoutineStyle>
  );
};

const AddRoutineStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 80px;

  p {
    margin: 10px;
    color: #0075ff;
    font-weight: bold;
    align-self: flex-end;
    cursor: pointer;
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
