import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import PhysicalRecordInputs from "../record/physicalRecord/PhysicalRecordInputs";

export type Inputs = {
  weight?: number;
  skeletalMusclet?: number;
  fatPercentaget?: number;
  bmit?: number;
};

const PhysicalRecordInner = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <HeaderWithDesc>
          <h2>오늘의 신체 기록</h2>
          <p className="b2">소수점 첫째자리까지 입력할 수 있어요</p>
        </HeaderWithDesc>
        <CustomButton
          size="super-mini"
          variant="contained"
          onClick={() => {}}
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          저장
        </CustomButton>
      </Header>
      <PhysicalRecordInputs register={register} />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding: 20px;
`;

const HeaderWithDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default PhysicalRecordInner;
