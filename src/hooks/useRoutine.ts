import { queryClient } from "@/api/queryClient";
import {
  deleteRoutineData,
  getRoutinesData,
  patchRoutineData,
  postRoutineData
} from "@/api/routine.api";
import { PER_PAGE } from "@/data/routine";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IGetRoutine, IRoutine, IRoutines } from "@/models/routine.model";
import {
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation
} from "@tanstack/react-query";

export const useGetRoutines = ({
  coachId,
  userId
}: Omit<IGetRoutine, "page"> = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<IRoutines>({
      queryKey: ["getRoutineData", coachId, userId],
      queryFn: ({ pageParam }: QueryFunctionContext) =>
        getRoutinesData({
          coachId,
          userId,
          page: pageParam as number
        }),
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

export const usePostRoutine = () => {
  const { mutateAsync, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    Omit<IRoutine, "routineId">
  >({
    mutationFn: postRoutineData,
    onSuccess: (data) => {
      console.log("Routine successfully posted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
    },
    onError: (error) => {
      console.error("Failed to post routine: ", error);
    }
  });

  return {
    mutateAsync, // POST 요청을 수행하는 함수
    isLoading: isPending,
    isError,
    data // 성공 시 반환된 데이터
  };
};

export const usePatchRoutine = () => {
  const { mutateAsync, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    { payload: Omit<IRoutine, "routineId">; routineId: number }
  >({
    mutationFn: ({ payload, routineId }) =>
      patchRoutineData(payload, routineId),
    onSuccess: (data) => {
      console.log("Routine successfully patched: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
    },
    onError: (error) => {
      console.error("Failed to patch routine: ", error);
    }
  });

  return {
    mutateAsync,
    isLoading: isPending,
    isError,
    data
  };
};

export const useDeleteRoutine = () => {
  const { mutateAsync, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    number
  >({
    mutationFn: deleteRoutineData,
    onSuccess: (data) => {
      console.log("Routine successfully deleted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
    },
    onError: (error) => {
      console.error("Failed to delete routine: ", error);
    }
  });

  return {
    mutateAsync,
    isLoading: isPending,
    isError,
    data
  };
};
