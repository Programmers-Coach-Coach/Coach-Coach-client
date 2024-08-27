import { queryClient } from "@/api/queryClient";
import { deleteReview, editReview, postReview } from "@/api/review.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IPostReview } from "@/models/review.model";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface IPostReviewVariables {
  coachId: number;
  data: IPostReview;
}

interface IEditReviewVariables {
  reviewId: number;
  data: IPostReview;
}

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
