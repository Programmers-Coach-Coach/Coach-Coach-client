import styled, { css } from "styled-components";

interface Props {
  disabled?: boolean;
}

const PHYSICAL_RECORDS = [
  {
    label: "체중",
    value: 55.0,
    unit: "kg"
  },
  {
    label: "골격근량",
    value: 20.2,
    unit: "kg"
  },
  {
    label: "체지방률",
    value: 22.0,
    unit: "%"
  },
  {
    label: "BMI",
    value: 55.0,
    unit: ""
  }
];

const PhysicalRecordInputs = ({ disabled = false }: Props) => {
  return (
    <Wrapper>
      {PHYSICAL_RECORDS.map((record, i) => (
        <InputWithLabel key={i}>
          <Label>{record.label}</Label>
          <InputContainer>
            <Input
              defaultValue={record.value.toFixed(1)}
              disabled={disabled}
              type="number"
              $disabled={disabled}
            />
            <Unit>{record.unit}</Unit>
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
  width: 60px;
  text-align: center;
  border: none;
  outline: none;
  padding: 4px;

  ${({ $disabled }) =>
    !$disabled &&
    css`
      border: 1px solid #ccc;
      border-radius: 4px;
    `}
`;

const Unit = styled.span`
  font-size: 12px;
  font-weight: 800;
  line-height: 1.5;
`;

export default PhysicalRecordInputs;
