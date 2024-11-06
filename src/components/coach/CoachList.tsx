import useCoachList from "@/hooks/useCoachList";
import { useDebounce } from "@/hooks/useDebounce";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useQueryString from "@/hooks/useQueryString";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Empty from "../common/Empty/Empty";
import Loading from "../loading/Loading";
import Coach from "./Coach";

const DEBOUNCE_DELAY = 300;

const CoachList = () => {
  const { getKeyword } = useQueryString();
  const [searchParams] = useSearchParams();

  const sort = searchParams.get("sort") ?? "latest";
  const sportsIds = searchParams.get("sportsIds")?.split(",").map(Number) ?? [];
  const keyword = getKeyword() ?? "";

  const debouncedSort = useDebounce(sort, DEBOUNCE_DELAY);
  const debouncedSportsIds = useDebounce(sportsIds);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useCoachList(
    keyword,
    debouncedSort,
    debouncedSportsIds
  );

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage
  });

  // InfiniteData<ICoachList>의 데이터 접근 수정
  const coaches = data?.pages.flatMap((page) => page.data) || []; // 각 페이지의 코치 데이터를 하나의 배열로 평탄화

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
