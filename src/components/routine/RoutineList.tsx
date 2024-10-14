import { styled } from "styled-components";
import { IGetRoutine } from "@/models/routine.model";
import Empty from "../common/Empty/Empty";
import Routine from "./Routine";

interface RoutineListProps {
  routines: IGetRoutine[];
  state?: string;
  isCheck?: boolean; // 체크박스 필요한지
  isModify?: boolean; // 수정, 삭제 아이콘 필요한지
}

const RoutineList = ({
  routines,
  state,
  isCheck = true,
  isModify = true
}: RoutineListProps) => {
  const padding = state ? "180px" : "200px";

  const routinesArray = Array.isArray(routines) ? routines : [];

  return (
    <RoutineListStyle>
      {routinesArray.length ? (
        <>
          {routinesArray.map((item) => (
            <Routine
              key={item.routineId}
              id={item.routineId}
              name={item.routineName}
              isCheck={isCheck}
              isModify={isModify}
            />
          ))}
        </>
      ) : (
        <Empty
          name="routine"
          size="150px"
          color="gray3"
          descriptions="운동 루틴이 없습니다"
          padding={padding}
        />
      )}
    </RoutineListStyle>
  );
};

const RoutineListStyle = styled.div``;

export default RoutineList;
