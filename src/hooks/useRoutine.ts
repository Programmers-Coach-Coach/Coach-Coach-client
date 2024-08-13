import { queryClient } from "@/api/queryClient";
import {
  deleteRoutineData,
  getRoutinesData,
  patchRoutineData,
  postRoutineData
} from "@/api/routine.api";
import { IResponseMessage, IRoutine, IRoutines } from "@/models/routine.model";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetRoutines = () => {
  const { data, isLoading, isError } = useQuery<IRoutines>({
    queryKey: ["getRoutineData"],
    queryFn: getRoutinesData
  });

  return {
    data,
    isLoading,
    isError
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
    number
  >({
    mutationFn: patchRoutineData,
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
