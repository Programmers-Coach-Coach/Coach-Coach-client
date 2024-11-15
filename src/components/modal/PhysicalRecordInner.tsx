import {
  useEditPhysicalMetrics,
  usePostPhysicalMetrics
} from "@/hooks/queries/useRecord";

import useQueryString from "@/hooks/useQueryString";
import { IDetailPhysicalMetrics } from "@/models/record.model";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
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
      <Header>신체 정보 입력</Header>
      <PhysicalRecordInputs
        register={register}
        weight={weight}
        skeletalMuscle={skeletalMuscle}
        fatPercentage={fatPercentage}
        bmi={bmi}
      />
      <Button onClick={() => {}}>입력 완료</Button>
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

const Header = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 23px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.375px;
  color: ${({ theme }) => theme.buttonVariant.contained.color};
  background-color: ${({ theme }) =>
    theme.buttonVariant.contained.backgroundColor};
  border: ${({ theme }) => theme.buttonVariant.contained.border};
  border-radius: 20px;
  margin-bottom: 16px;
`;

export default PhysicalRecordInner;
