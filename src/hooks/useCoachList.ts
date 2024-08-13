import { getCoachAll } from "@/api/coach.api";
import { PER_PAGE } from "@/data/coach";
import { IAllCoachList, ICoachList } from "@/models/coach.model";
import { useInfiniteQuery } from "@tanstack/react-query";

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
