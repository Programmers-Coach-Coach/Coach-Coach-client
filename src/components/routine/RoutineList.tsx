import { styled } from "styled-components";
import Routine from "@/components/routine/Routine";
import { useGetRoutines } from "@/hooks/useRoutine";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { IRoutine } from "@/models/routine.model";
import Empty from "../common/Empty/Empty";

interface RoutineListProps {
  routines: IRoutine[];
}

const RoutineList = ({ routines }: RoutineListProps) => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = useGetRoutines();

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage
  });
  return (
    <RoutineListStyle>
      {routines.length ? (
        <>
          {routines.map((item) => (
            <Routine
              key={item.routineId}
              id={item.routineId}
              name={item.routineName}
              sportId={item.sportId}
            />
          ))}
          <div ref={setTarget}></div>
          {isFetchingNextPage
            ? "로딩중..."
            : hasNextPage
              ? "다음 페이지 불러오기"
              : "마지막 페이지"}
        </>
      ) : (
        <Empty
          name="routine"
          size="150px"
          color="text"
          descriptions="운동 루틴이 없습니다"
          padding="280px"
        />
      )}
    </RoutineListStyle>
  );
};

const RoutineListStyle = styled.div``;

export default RoutineList;
