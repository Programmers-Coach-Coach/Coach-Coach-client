import ExerciseDetail from "@/components/record/exerciseRecord/ExerciseDetail";
import PhysicalRecord from "@/components/record/physicalRecord/PhysicalRecord";
import styled from "styled-components";

const RecordDatail = () => {
  return (
    <Wrapper>
      <ExerciseDetail />
      <PhysicalRecord />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
export default RecordDatail;
