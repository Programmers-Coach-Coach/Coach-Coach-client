import { queryClient } from "@/api/queryClient";
import {
  deleteActionData,
  patchActionData,
  postActionData
} from "@/api/routine/action.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IAction } from "@/models/routine.model";
import { useMutation } from "@tanstack/react-query";

export const usePostAction = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    {
      payload: Omit<IAction, "actionId">;
      routineId: number;
      categoryId: number;
    }
  >({
    mutationFn: ({ payload, routineId, categoryId }) =>
      postActionData(payload, routineId, categoryId),
    onSuccess: (data) => {
      console.log("Action successfully posted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
    },
    onError: (error) => {
      console.error("Failed to post Action: ", error);
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
      routineId: number;
      categoryId: number;
      actionId: number;
    }
  >({
    mutationFn: ({ payload, routineId, categoryId, actionId }) =>
      patchActionData(payload, routineId, categoryId, actionId),
    onSuccess: (data) => {
      console.log("Action successfully patched: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
    },
    onError: (error) => {
      console.error("Failed to patch Action: ", error);
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
    { routineId: number; categoryId: number; actionId: number }
  >({
    mutationFn: ({ routineId, categoryId, actionId }) =>
      deleteActionData(routineId, categoryId, actionId),
    onSuccess: (data) => {
      console.log("Action successfully deleted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
    },
    onError: (error) => {
      console.error("Failed to delete Action: ", error);
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};
