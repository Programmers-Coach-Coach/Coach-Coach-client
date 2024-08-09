import { styled } from "styled-components";
import AuthInput from "../../InputField/Text/AuthInput";
import SelectBox from "../../InputField/Select/SelectBox";

interface RoutineContentsProps {
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoutineContents = ({ setIsSelect }: RoutineContentsProps) => {
  return (
    <RoutineContentsStyle>
      <h2>루틴명</h2>
      <AuthInput placeholder="a" name="c" />
      <h2>종목</h2>
      <SelectBox setIsSelect={setIsSelect} />
    </RoutineContentsStyle>
  );
};

const RoutineContentsStyle = styled.div`
  width: 100%;
  height: 100%;
  h2 {
    padding: 10px;
  }
`;

export default RoutineContents;
