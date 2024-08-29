import { styled } from "styled-components";
import SelectBoxInModal from "../../InputField/Select/SelectBoxInModal";
import InputInModal from "../../InputField/Text/InputInModal";
import { useModalInfo } from "@/store/modalInfo.store";

interface RoutineContentsProps {
  routineName?: string;
  sportName?: string;
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoutineContents = ({
  routineName,
  sportName,
  setIsSelect
}: RoutineContentsProps) => {
  const setRoutineName = useModalInfo((state) => state.setRoutineName);

  return (
    <RoutineContentsStyle>
      <h2>루틴명</h2>
      <InputInModal name={routineName} content="루틴" setFn={setRoutineName} />
      <h2>종목</h2>
      <SelectBoxInModal sportName={sportName} setIsSelect={setIsSelect} />
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
