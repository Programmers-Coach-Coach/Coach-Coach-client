import { queryClient } from "@/api/queryClient";
import {
  deleteCategoryData,
  patchCategoryData,
  postCategoryData,
  postCompletedCategoryData
} from "@/api/routine/category.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { ICategoryName } from "@/models/routine.model";
import { useMutation } from "@tanstack/react-query";

export const usePostCategory = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    { payload: ICategoryName; routineId: number }
  >({
    mutationFn: ({ payload, routineId }) =>
      postCategoryData(payload, routineId),
    onSuccess: (data) => {
      console.log("Category successfully posted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
    },
    onError: (error) => {
      console.error("Failed to post Category: ", error);
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};

export const usePatchCategory = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    { payload: ICategoryName; routineId: number; categoryId: number }
  >({
    mutationFn: ({ payload, routineId, categoryId }) =>
      patchCategoryData(payload, routineId, categoryId),
    onSuccess: (data) => {
      console.log("Category successfully patched: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
    },
    onError: (error) => {
      console.error("Failed to patch Category: ", error);
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};

export const useDeleteCategory = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    { routineId: number; categoryId: number }
  >({
    mutationFn: ({ routineId, categoryId }) =>
      deleteCategoryData(routineId, categoryId),
    onSuccess: (data) => {
      console.log("Category successfully deleted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getRoutineData"] });
    },
    onError: (error) => {
      console.error("Failed to delete Category: ", error);
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
    { routineId: number; categoryId: number }
  >({
    mutationFn: ({ routineId, categoryId }) =>
      postCompletedCategoryData(routineId, categoryId),
    onSuccess: (data) => {
      console.log("Completed successfully posted: ", data);
      queryClient.invalidateQueries({
        queryKey: ["getRoutineData"]
      });
    },
    onError: (error) => {
      console.error("Failed to post Completed: ", error);
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};
