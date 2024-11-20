import { queryClient } from "@/api/queryClient";
import {
  deleteReview,
  editReview,
  getReviews,
  postReview
} from "@/api/review.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IPostReview, TReviewFilter } from "@/models/review.model";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface IPostReviewVariables {
  coachId: number;
  data: IPostReview;
}

interface IEditReviewVariables {
  reviewId: number;
  data: IPostReview;
}

export const useReviewList = (coachId: number, sortOptions: TReviewFilter) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getReviewList", coachId, sortOptions],
    queryFn: () => getReviews(coachId, sortOptions)
  });

  return { data, isLoading, isError };
};

export const usePostReview = (coachId: number) => {
  const { mutate, isError } = useMutation<
    IResponseMessage,
    Error,
    IPostReviewVariables
  >({
    mutationFn: ({ coachId, data }: IPostReviewVariables) =>
      postReview(coachId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getCoachDetail", coachId] });
      queryClient.invalidateQueries({
        queryKey: ["getReviewList"]
      });
    },
    onError: () => {
      toast.error("리뷰는 한번만 남길 수 있습니다");
    }
  });

  return {
    isError,
    mutate
  };
};

export const useEditReview = (refetchCoachId: number | undefined) => {
  const { mutate, isError } = useMutation<
    IResponseMessage,
    Error,
    IEditReviewVariables
  >({
    mutationFn: ({ reviewId, data }: IEditReviewVariables) =>
      editReview(reviewId, data),
    onSuccess: () => {
      if (refetchCoachId) {
        queryClient.invalidateQueries({
          queryKey: ["getCoachDetail", refetchCoachId]
        });
        queryClient.invalidateQueries({
          queryKey: ["getReviewList"]
        });
      }
    },
    onError: () => {}
  });

  return {
    isError,
    mutate
  };
};

export const useDeleteReview = (refetchCoachId: number | undefined) => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: deleteReview,
    onSuccess: () => {
      if (refetchCoachId) {
        queryClient.invalidateQueries({
          queryKey: ["getCoachDetail", refetchCoachId]
        });
      }
    },
    onError: () => {}
  });

  return {
    isError,
    mutate
  };
};
