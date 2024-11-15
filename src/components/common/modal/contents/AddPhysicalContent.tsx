import { usePostPhysicalMetrics } from "@/hooks/queries/useRecord";
import useQueryString from "@/hooks/useQueryString";
import { IDetailPhysicalMetrics } from "@/models/record.model";
import { todayFormat } from "@/utils/format";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

const WEIGHT = "weight";
const SKELETAL_MUSCLE = "skeletalMuscle";
const FAT_PERCENTAGE = "fatPercentage";
const BMI = "bmi";

export interface FormPhysicsInputs {
  weight: number;
  skeletalMuscle: number;
  fatPercentage: number;
  bmi: number;
}

interface InputField {
  name: keyof FormPhysicsInputs;
  label: string;
  unit: string;
}

const inputFields: InputField[] = [
  { name: WEIGHT, label: "체중", unit: "kg" },
  { name: SKELETAL_MUSCLE, label: "골격근량", unit: "kg" },
  { name: FAT_PERCENTAGE, label: "체지방률", unit: "%" },
  { name: BMI, label: "BMI", unit: "" }
];

interface Props extends IDetailPhysicalMetrics {
  date?: string;
  closeModal: () => void;
}

const AddPhysicalContent = ({
  weight,
  skeletalMuscle,
  fatPercentage,
  bmi,
  closeModal
}: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormPhysicsInputs>({
    defaultValues: {
      weight: weight ?? 0.0,
      skeletalMuscle: skeletalMuscle ?? 0.0,
      fatPercentage: fatPercentage ?? 0.0,
      bmi: bmi ?? 0.0
    }
  });

  const { getRecordDate } = useQueryString();

  const recordDate = getRecordDate() ?? todayFormat();

  const { mutate: postMutate } = usePostPhysicalMetrics();

  const onSubmit: SubmitHandler<FormPhysicsInputs> = (data) => {
    postMutate({ ...data, recordDate });
    closeModal();
  };

  const handleInputChange = (field: keyof FormPhysicsInputs, value: number) => {
    const [interger, decimal] = value.toFixed(1).split(".");
    const formatted = `${interger}.${decimal}`;
    setValue(field, parseFloat(formatted));
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Header>신체 정보 입력</Header>
      <Columns>
        {inputFields.map((field, i) => (
          <div key={i}>
            <span>{field.label}</span>
            {field.unit && <span>({field.unit})</span>}
          </div>
        ))}
      </Columns>
      <Datas>
        {inputFields.map((field, i) => (
          <input
            type="number"
            step="0.1"
            {...register(field.name, { valueAsNumber: true })}
            key={i}
            onChange={(e) =>
              handleInputChange(field.name, parseFloat(e.target.value || "0"))
            }
          />
        ))}
      </Datas>
      <Button type="submit">입력 완료</Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
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

const Columns = styled.div`
  display: flex;
  padding: 10px 0;

  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.325px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  div {
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;
    width: 25%;
    text-align: center;
  }
`;

const Datas = styled.div`
  gap: 7px;
  width: 100%;
  padding: 15px 0 25px;

  display: flex;

  input {
    display: flex;
    width: 25%;
    color: #9ea3b2;
    background-color: #252932;
    border-radius: 5px;
    padding: 13px 29px;
    text-align: center;
    border: none;
    outline: none;
    font-weight: 400;

    &:active,
    &:focus {
      outline: 1px solid #0075ff;
      font-weight: 500;
      color: #fff;
      background-color: rgba(0, 117, 255, 0.1);
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox  */
  input[type="number"] {
    -moz-appearance: textfield;
  }
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

export default AddPhysicalContent;
