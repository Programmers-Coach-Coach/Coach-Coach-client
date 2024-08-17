import { styled } from "styled-components";
import Icon from "@/components/Icon/Icon";
import Routine from "@/components/routine/Routine";
import { useGetRoutines } from "@/hooks/useRoutine";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { IRoutine } from "@/models/routine.model";

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
        <div>
          <EmptyRoutineStyle>
            <Icon name="routine" size="150px" color="text" />
            <h2>운동 루틴이 없습니다.</h2>
          </EmptyRoutineStyle>
        </div>
      )}
    </RoutineListStyle>
  );
};

const RoutineListStyle = styled.div``;

const EmptyRoutineStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 280px;
  margin: 0 auto;
`;

export default RoutineList;
