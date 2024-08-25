import { queryClient } from "@/api/queryClient";
import {
  deleteRoutineData,
  getRoutineData,
  getRoutinesData,
  patchRoutineData,
  postRoutineData
} from "@/api/routine/routine.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import {
  IGetQuery,
  IGetRoutine,
  IPostRoutine,
  IRoutineDetails
} from "@/models/routine.model";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetRoutines = ({ coachId, userId }: IGetQuery = {}) => {
  const { data, isLoading, isError } = useQuery<IGetRoutine[]>({
    queryKey: ["getRoutinesData", coachId, userId],
    queryFn: () => getRoutinesData({ coachId, userId })
  });

  return {
    data,
    isLoading,
    isError
  };
};

export const useGetRoutine = (
  { coachId, userId }: IGetQuery = {},
  routineId: number
) => {
  const { data, isLoading, isError } = useQuery<IRoutineDetails>({
    queryKey: ["getRoutineData", coachId, userId, routineId],
    queryFn: () => getRoutineData({ coachId, userId }, routineId)
  });

  return {
    data,
    isLoading,
    isError
  };
};

export const usePostRoutine = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    Omit<IPostRoutine, "routineId">
  >({
    mutationFn: postRoutineData,
    onSuccess: (data) => {
      console.log("Routine successfully posted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutinesData"] });
    },
    onError: (error) => {
      console.error("Failed to post routine: ", error);
    }
  });

  return {
    mutate, // POST 요청을 수행하는 함수
    isLoading: isPending,
    isError,
    data // 성공 시 반환된 데이터
  };
};

export const usePatchRoutine = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    { payload: Omit<IPostRoutine, "routineId">; routineId: number }
  >({
    mutationFn: ({ payload, routineId }) =>
      patchRoutineData(payload, routineId),
    onSuccess: (data) => {
      console.log("Routine successfully patched: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutinesData"] });
    },
    onError: (error) => {
      console.error("Failed to patch routine: ", error);
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};

export const useDeleteRoutine = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    number
  >({
    mutationFn: deleteRoutineData,
    onSuccess: (data) => {
      console.log("Routine successfully deleted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutinesData"] });
    },
    onError: (error) => {
      console.error("Failed to delete routine: ", error);
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};
