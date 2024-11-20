import styled from "styled-components";

interface Props {
  title: string;
  items: string[];
  activeNumber: number;
  onPickNumber: (id: number) => void;
  onSubmit: () => void;
}

const RadioContent = ({
  title,
  items,
  activeNumber,
  onPickNumber,
  onSubmit
}: Props) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Contents>
        {items.map((item, i) => (
          <Label key={i}>
            <RadioInput
              type="radio"
              name="radioGroup"
              onChange={() => onPickNumber(i)}
              checked={activeNumber === i}
            />
            <RadioLabel $isActive={activeNumber === i}>{item}</RadioLabel>
          </Label>
        ))}
      </Contents>
      <Button onClick={onSubmit}>적용하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 24px;
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

const Contents = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 18px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
  -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거
  appearance: none; // 기본 브라우저에서 기본 스타일 제거
  width: 20px;
  height: 20px;
  border: 1px solid #0075ff; // 체크되지 않았을 때의 테두리 색상
  border-radius: 50%;
  outline: none; // focus 시에 나타나는 기본 스타일 제거
  cursor: pointer;

  &:checked {
    background-color: #fff; // 체크 시 내부 원 색상
    border: 5px solid #0075ff; // 라인이 아닌, 라인과 원 사이 색상
    box-shadow: 0 0 0 1px #0075ff; // 라인
  }
`;

const RadioLabel = styled.p<{ $isActive: boolean }>`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  padding: 0 1em;
  border-radius: 20px;
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

export default RadioContent;
