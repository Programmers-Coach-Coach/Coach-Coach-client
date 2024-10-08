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
import axios from "axios";
import toast from "react-hot-toast";

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRoutinesData"] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "요청 중 오류가 발생했습니다."
        );
      }
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRoutinesData"] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "요청 중 오류가 발생했습니다."
        );
      }
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRoutinesData"] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "요청 중 오류가 발생했습니다."
        );
      }
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};
