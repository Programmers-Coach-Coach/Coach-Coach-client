import { queryClient } from "@/api/queryClient";
import { postReview } from "@/api/review.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IPostReview } from "@/models/review.model";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface IPostReviewVariables {
  coachId: number;
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
