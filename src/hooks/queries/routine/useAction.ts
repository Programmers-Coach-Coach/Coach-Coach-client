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
      categoryId: number;
    }
  >({
    mutationFn: ({ payload, categoryId }) =>
      postActionData(payload, categoryId),
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
      actionId: number;
    }
  >({
    mutationFn: ({ payload, actionId }) => patchActionData(payload, actionId),
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
    number
  >({
    mutationFn: deleteActionData,
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
