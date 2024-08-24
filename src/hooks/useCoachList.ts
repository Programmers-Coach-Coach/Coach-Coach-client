import { getCoachAll, getMyCoaches } from "@/api/coach.api";
import { ICoachList, ISimpleCoach } from "@/models/coach.model";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const PER_PAGE = 20;
const useCoachList = (
  search: string | null,
  sort: string,
  sportsIds: number[]
) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery<ICoachList>({
      queryKey: ["coach-infiniteScroll", search, sort, sportsIds],
      queryFn: ({ pageParam }) =>
        getCoachAll(pageParam as number, search, sort, sportsIds),
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.currentPage + 1;
        return lastPage.totalCount > lastPage.currentPage * PER_PAGE
          ? nextPage
          : undefined;
      },
      initialPageParam: 1
    });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch
  };
};

export default useCoachList;

export const useMyCoachList = () => {
  const { data, isLoading, isError } = useQuery<ISimpleCoach[]>({
    queryKey: ["getMyCoaches"],
    queryFn: getMyCoaches
  });

  return { data, isLoading, isError };
};
