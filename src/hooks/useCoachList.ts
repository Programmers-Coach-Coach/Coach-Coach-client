import { getCoachAll, getMyCoaches } from "@/api/coach.api";
import { ICoachList, IGetMyCoach } from "@/models/coach.model";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const PER_PAGE = 20;
const useCoachList = (
  search: string | null,
  sort: string,
  sportsIds: number[],
  gender: string | null
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery<ICoachList>({
      queryKey: ["coach-infiniteScroll", search, sort, sportsIds, gender],
      queryFn: ({ pageParam }) =>
        getCoachAll(pageParam as number, search, sort, sportsIds, gender),
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.currentPage + 1;
        return lastPage.totalCount > lastPage.currentPage * PER_PAGE
          ? nextPage
          : undefined;
      },
      initialPageParam: 1
    });

  const coaches = data?.pages.flatMap((page) => page.data) || [];

  return {
    coaches,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch
  };
};

export default useCoachList;

export const useMyCoachList = () => {
  const { data, isLoading, isError } = useQuery<IGetMyCoach[]>({
    queryKey: ["getMyCoaches"],
    queryFn: getMyCoaches
  });

  return { data, isLoading, isError };
};
