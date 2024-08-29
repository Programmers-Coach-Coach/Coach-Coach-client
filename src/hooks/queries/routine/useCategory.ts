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
import axios from "axios";
import toast from "react-hot-toast";

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
