import useCoachList from "@/hooks/useCoachList";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styled from "styled-components";
import Coach from "./Coach";

const CoachList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useCoachList(
    {
      filter: {}
    }
  );

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage
  });

  // InfiniteData<ICoachList>의 데이터 접근 수정
  const coaches = data?.pages.flatMap((page) => page.data) || []; // 각 페이지의 코치 데이터를 하나의 배열로 평탄화

  return (
    <CoachListStyle>
      {coaches.map((coach) => (
        <Coach coach={coach} key={coach.coachId} />
      ))}
      <div ref={setTarget}></div>
      {isFetchingNextPage
        ? "로딩중..."
        : hasNextPage
          ? "다음 페이지 불러오기"
          : "마지막 페이지"}
    </CoachListStyle>
  );
};

const CoachListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 90px;
`;

export default CoachList;
