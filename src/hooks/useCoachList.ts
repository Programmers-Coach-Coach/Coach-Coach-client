import { getCoachAll, getMyCoaches } from "@/api/coach.api";
import { IAllCoachList, ICoachList, ISimpleCoach } from "@/models/coach.model";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const PER_PAGE = 20;
const useCoachList = (filter: Omit<IAllCoachList, "page">) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<ICoachList>({
      queryKey: ["coach-infiniteScroll", filter],
      queryFn: ({ pageParam }) =>
        getCoachAll({ ...filter, page: pageParam as number }),
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
    isFetchingNextPage
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
