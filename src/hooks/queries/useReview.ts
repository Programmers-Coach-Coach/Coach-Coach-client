import { postReview } from "@/api/review.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IPostReview } from "@/models/review.model";
import { useMutation } from "@tanstack/react-query";

interface IPostReviewVariables {
  id: number;
  data: IPostReview;
}

export const usePostReviews = () => {
  const { mutate, isError } = useMutation<
    IResponseMessage,
    Error,
    IPostReviewVariables
  >({
    mutationFn: ({ id, data }: IPostReviewVariables) => postReview(id, data),
    onSuccess: () => {},
    onError: () => {}
  });

  return {
    isError,
    mutate
  };
};
