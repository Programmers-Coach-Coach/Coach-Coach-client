import {
  useEditPhysicalMetrics,
  usePostPhysicalMetrics
} from "@/hooks/queries/useRecord";

import useQueryString from "@/hooks/useQueryString";
import { IDetailPhysicalMetrics } from "@/models/record.model";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import PhysicalRecordInputs from "../record/physicalRecord/PhysicalRecordInputs";

export interface FormPhysicsInputs {
  weight?: number;
  skeletalMuscle?: number;
  fatPercentage?: number;
  bmi?: number;
}

interface Props extends IDetailPhysicalMetrics {
  closeModal: () => void;
}
const PhysicalRecordInner = ({
  weight,
  skeletalMuscle,
  fatPercentage,
  bmi,
  closeModal
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting }
  } = useForm<FormPhysicsInputs>();

  const { getRecordId, getRecordDate } = useQueryString();

  const recordId = getRecordId();
  const recordDate = getRecordDate() ?? ""; // TODO: 무조건 'YYYY-DD-MM'로 보내야하기 때문에 "" 대신 다른 값으로 수정해야함

  const { mutate: postMutate } = usePostPhysicalMetrics();
  const { mutate: editMutate } = useEditPhysicalMetrics(recordId); // TODO: 백엔드에서 '나의 신체 정보 수정'의 response id 보내주면 인자로 recordId 안보내줘도 됨

  const onSubmit: SubmitHandler<FormPhysicsInputs> = (data) => {
    if (recordId) {
      editMutate({ data, recordId });
      closeModal();
    } else {
      postMutate({ ...data, recordDate });
      closeModal();
    }
  };

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
      <PhysicalRecordInputs
        register={register}
        weight={weight}
        skeletalMuscle={skeletalMuscle}
        fatPercentage={fatPercentage}
        bmi={bmi}
      />
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
