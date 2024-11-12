import { queryClient } from "@/api/queryClient";
import {
  deleteRoutineComplete,
  deleteRoutineData,
  getRoutinesData,
  patchRoutineData,
  postRoutineComplete,
  postRoutineData
} from "@/api/routine.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import {
  IRoutineQuery,
  IGetRoutineList,
  IPostPatchRoutine
} from "@/models/routine.model";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export const useGetRoutines = ({ coachId, userId }: IRoutineQuery = {}) => {
  const { data, isLoading, isError } = useQuery<IGetRoutineList>({
    queryKey: ["getRoutinesData", coachId, userId],
    queryFn: () => getRoutinesData({ coachId, userId })
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
    IPostPatchRoutine
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
    { payload: IPostPatchRoutine; routineId: number }
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

export const usePostCompleted = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    number
  >({
    mutationFn: postRoutineComplete,
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

export const useDeleteCompleted = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    number
  >({
    mutationFn: deleteRoutineComplete,
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
