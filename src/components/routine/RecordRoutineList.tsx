import { ICompletedRoutine } from "@/models/record.model";
import styled from "styled-components";
import RecordRoutine from "./RecordRoutine";

interface Props {
  routines: ICompletedRoutine[];
}

const RecordRoutineList = ({ routines }: Props) => {
  return (
    <Wrapper>
      {routines.map((routine) => (
        <RecordRoutine key={routine.routineId} routine={routine} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 400px;
`;

export default RecordRoutineList;
