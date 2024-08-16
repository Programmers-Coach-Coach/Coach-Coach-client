import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import PhysicalRecordInputs from "../record/physicalRecord/PhysicalRecordInputs";

const PhysicalRecordInner = () => {
  return (
    <Wrapper>
      <Header>
        <h1>오늘의 신체 정보</h1>
        <CustomButton size="mini" variant="contained" onClick={() => {}}>
          변경
        </CustomButton>
      </Header>
      <PhysicalRecordInputs />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default PhysicalRecordInner;
