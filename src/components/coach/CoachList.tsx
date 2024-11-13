import useCoachList from "@/hooks/useCoachList";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useQueryString from "@/hooks/useQueryString";
import styled from "styled-components";
import Empty from "../common/Empty/Empty";
import Loading from "../loading/Loading";
import Coach from "./Coach";

const CoachList = () => {
  const { getKeyword, getSort, getSports } = useQueryString();

  const sort = getSort();
  const sportsIds = getSports();
  const keyword = getKeyword();

  const { coaches, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCoachList(keyword, sort, sportsIds);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage
  });

  return (
    <>
      {coaches.length > 0 ? (
        <CoachListStyle>
          {coaches.map((coach) => (
            <Coach coach={coach} key={coach.coachId} />
          ))}
          <div ref={setTarget}></div>
          {isFetchingNextPage && <Loading textDisabled />}
        </CoachListStyle>
      ) : (
        <Empty
          name="list"
          size="64px"
          color="gray3"
          descriptions="다른 키워드로 검색해보세요!"
        />
      )}
    </>
  );
};

const CoachListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default CoachList;
