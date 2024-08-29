import ExerciseCalender from "@/components/record/exerciseRecord/ExerciseCalendar";
import PhysicalRecordChart from "@/components/record/physicalRecord/PhysicalRecordChart";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const Record = () => {
  return (
    <Wrapper>
      <HeaderWithDesc>
        <h2>운동 기록</h2>
        <p className="b2">
          운동 기록과 신체 기록을 보고 싶다면 해당 일자를 클릭해보아요
        </p>
      </HeaderWithDesc>
      <WhiteSpace $height={10} />
      <ExerciseCalender />
      <WhiteSpace $height={30} />
      <PhysicalRecordChart />
      <WhiteSpace $height={80} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const HeaderWithDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 10px;
`;

export default Record;
