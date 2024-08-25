import { NUMBER_REGEX } from "@/constants/regex";
import { IPhysicalMetrics } from "@/models/record.model";
import { UseFormProps, UseFormRegister } from "react-hook-form";
import styled, { css } from "styled-components";

interface Props extends UseFormProps {
  disabled?: boolean;
  weight: number | null;
  skeletalMuscle: number | null;
  fatPercentage: number | null;
  bmi: number | null;
  register?: UseFormRegister<IPhysicalMetrics>;
}

const PhysicalRecordInputs = ({
  disabled = false,
  weight,
  skeletalMuscle,
  fatPercentage,
  bmi,
  register
}: Props) => {
  const PHYSICAL_RECORDS = [
    {
      label: "체중(kg)",
      name: "weight",
      value: weight
    },
    {
      label: "골격근량(kg)",
      name: "skeletalMuscle",
      value: skeletalMuscle
    },
    {
      label: "체지방률(%)",
      name: "fatPercentage",
      value: fatPercentage
    },
    {
      label: "BMI",
      name: "bmi",
      value: bmi
    }
  ];
  return (
    <Wrapper>
      {PHYSICAL_RECORDS.map((record, i) => (
        <InputWithLabel key={i}>
          <Label>{record.label}</Label>
          <InputContainer>
            <Input
              defaultValue={record.value?.toFixed(1)}
              disabled={disabled}
              $disabled={disabled}
              placeholder="-"
              {...(register
                ? register(record.name as keyof IPhysicalMetrics, {
                    pattern: NUMBER_REGEX.singleDecimalNumber,
                    setValueAs: Number
                  })
                : {})}
            />
          </InputContainer>
        </InputWithLabel>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
  height: 116px;
`;

const InputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Label = styled.div`
  text-align: center;
  font-size: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Input = styled.input<{ $disabled: boolean }>`
  font-weight: 800;
  width: 100%;
  text-align: center;
  border: none;
  outline: none;
  padding: 4px;

  ${({ $disabled }) =>
    !$disabled &&
    css`
      border: 1px solid #ccc;
      border-radius: 4px;
    `};

  &:disabled {
    background-color: #fff;
  }
`;

export default PhysicalRecordInputs;
