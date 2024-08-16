import styled, { css } from "styled-components";

interface Props {
  disabled?: boolean;
}

const PHYSICAL_RECORDS = [
  {
    label: "체중(kg)",
    value: null
  },
  {
    label: "골격근량(kg)",
    value: 20.2
  },
  {
    label: "체지방률(%)",
    value: 22.0
  },
  {
    label: "BMI",
    value: 25.0
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
              defaultValue={record.value?.toFixed(1)}
              disabled={disabled}
              type="number"
              $disabled={disabled}
              placeholder="-"
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
  width: 90px;
  text-align: center;
  border: none;
  outline: none;
  padding: 4px;
  position: relative;
  left: 5px;

  ${({ $disabled }) =>
    !$disabled &&
    css`
      border: 1px solid #ccc;
      border-radius: 4px;
    `};
`;

export default PhysicalRecordInputs;
