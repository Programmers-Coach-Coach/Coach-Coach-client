import { getCoachAll, getMyCoaches } from "@/api/coach.api";
import { IAllCoachList, ICoachList, ISimpleCoach } from "@/models/coach.model";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const PER_PAGE = 20;
const useCoachList = (filter: Omit<IAllCoachList, "page">, sort: string) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery<ICoachList>({
      queryKey: ["coach-infiniteScroll", filter],
      queryFn: ({ pageParam }) =>
        getCoachAll({ ...filter, page: pageParam as number }, sort),
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.currentPage + 1;
        return lastPage.totalCount > lastPage.currentPage * PER_PAGE
          ? nextPage
          : undefined;
      },
      initialPageParam: 1
    });

  useEffect(() => {
    refetch();
  }, [refetch, sort]);

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
