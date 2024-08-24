import { styled } from "styled-components";
import Routine from "@/components/routine/Routine";
import { IGetRoutine } from "@/models/routine.model";
import Empty from "../common/Empty/Empty";

interface RoutineListProps {
  routines: IGetRoutine[];
  state?: string;
}

const RoutineList = ({ routines, state }: RoutineListProps) => {
  const padding = state ? "180px" : "200px";
  return (
    <RoutineListStyle>
      {routines.length ? (
        <>
          {routines.map((item) => (
            <Routine
              key={item.routineId}
              id={item.routineId}
              name={item.routineName}
              sport={item.sportName}
            />
          ))}
        </>
      ) : (
        <Empty
          name="routine"
          size="150px"
          color="text"
          descriptions="운동 루틴이 없습니다"
          padding={padding}
        />
      )}
    </RoutineListStyle>
  );
};

const RoutineListStyle = styled.div``;

export default RoutineList;
