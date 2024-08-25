import ExerciseDetail from "@/components/record/exerciseRecord/ExerciseDetail";
import PhysicalRecord from "@/components/record/physicalRecord/PhysicalRecord";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const RecordDatail = () => {
  // const [date, setDate] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  const date = searchParams.get("date");
  const recordId = searchParams.get("recordId");

  return (
    <Wrapper>
      <DateWrapper>
        <h2>{date}</h2>
      </DateWrapper>
      <ExerciseDetail />
      <PhysicalRecord />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;
export default RecordDatail;
