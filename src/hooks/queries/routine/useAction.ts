import { queryClient } from "@/api/queryClient";
import {
  deleteActionData,
  patchActionData,
  postActionData
} from "@/api/routine/action.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IAction } from "@/models/routine.model";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export const usePostAction = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    {
      payload: Omit<IAction, "actionId">;
      categoryId: number;
    }
  >({
    mutationFn: ({ payload, categoryId }) =>
      postActionData(payload, categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
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

export const usePatchAction = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    {
      payload: Omit<IAction, "actionId">;
      actionId: number;
    }
  >({
    mutationFn: ({ payload, actionId }) => patchActionData(payload, actionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
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

export const useDeleteAction = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    number
  >({
    mutationFn: deleteActionData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
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
