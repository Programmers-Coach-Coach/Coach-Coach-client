import { queryClient } from "@/api/queryClient";
import {
  deleteCategoryData,
  deleteCompletedCategoryData,
  patchCategoryData,
  postCategoryData,
  postCompletedCategoryData
} from "@/api/routine/category.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { ICategoryName, ICompletedCategory } from "@/models/routine.model";
import { useMutation } from "@tanstack/react-query";

export const usePostCategory = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    { payload: ICategoryName; routineId: number }
  >({
    mutationFn: ({ payload, routineId }) =>
      postCategoryData(payload, routineId),
    onSuccess: () => {
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
    { payload: ICategoryName; categoryId: number }
  >({
    mutationFn: ({ payload, categoryId }) =>
      patchCategoryData(payload, categoryId),
    onSuccess: () => {
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
    number
  >({
    mutationFn: deleteCategoryData,
    onSuccess: () => {
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
    IResponseMessage | ICompletedCategory,
    Error,
    number
  >({
    mutationFn: postCompletedCategoryData,
    onSuccess: () => {
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

export const useDeleteCompleted = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage | null,
    Error,
    number
  >({
    mutationFn: deleteCompletedCategoryData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getRoutineData"]
      });
    },
    onError: (error) => {
      console.error("Failed to delete Completed: ", error);
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};
