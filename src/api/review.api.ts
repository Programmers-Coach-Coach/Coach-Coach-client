import { IResponseMessage } from "@/models/responseMessage.model";
import { IPostReview } from "@/models/review.model";
import { requestHandler } from "./http";

export const postReview = async (coachId: number, data: IPostReview) => {
  return await requestHandler<IResponseMessage>(
    "post",
    `coaches/${coachId}/reviews`,
    data
  );
};

export const editReview = async (reviewId: number, data: IPostReview) => {
  return await requestHandler<IResponseMessage>(
    "patch",
    `coaches/reviews/${reviewId}`,
    data
  );
};

export const deleteReview = async (reviewId: number) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `coaches/reviews/${reviewId}`
  );
};
