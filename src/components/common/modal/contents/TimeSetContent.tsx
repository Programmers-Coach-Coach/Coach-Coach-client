import { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import ScrollSelect from "../../InputField/Select/ScrollSelect";

interface TimeSetContentProps {}

interface ChildComponentHandle {
  childFunction: () => void;
}

const TIMES = Array.from({ length: 60 }, (_, i) => i + 1); // 1부터 60까지의 배열
const SETS = Array.from({ length: 20 }, (_, i) => i + 1);

const TimeSetContent = forwardRef<ChildComponentHandle, TimeSetContentProps>(
  (_, ref) => {
    const [time, setTime] = useState<number | string>(0);
    const [set, setSet] = useState<number | string>(0);

    // 부모 컴포넌트에서 접근할 수 있는 함수 정의
    useImperativeHandle(ref, () => ({
      childFunction() {
        alert(`time: ${time}, set: ${set}`);
      }
    }));

    return (
      <TimeSetContentStyle>
        <TimeSetScrollStyle>
          <p>횟수/시간 (분)</p>
          <ScrollSelect TIMESETS={TIMES} dispatch={setTime} />
        </TimeSetScrollStyle>
        <TimeSetScrollStyle>
          <p>세트</p>
          <ScrollSelect TIMESETS={SETS} dispatch={setSet} />
        </TimeSetScrollStyle>
      </TimeSetContentStyle>
    );
  }
);

const TimeSetContentStyle = styled.div`
  display: flex;
`;

const TimeSetScrollStyle = styled.div`
  width: 50%;

  p {
    width: 100%;
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 4.3vw;
      margin-bottom: 1.8vw;
    }
  }
`;

export default TimeSetContent;
