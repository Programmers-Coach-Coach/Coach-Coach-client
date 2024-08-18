import PhysicalRecord from "@/components/record/physicalRecord/PhysicalRecord";
import styled from "styled-components";

const RecordDatail = () => {
  return (
    <Wrapper>
      <PhysicalRecord />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default RecordDatail;
