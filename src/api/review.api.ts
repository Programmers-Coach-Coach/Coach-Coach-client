import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IPostReview, IReviewList, TReviewFilter } from "@/models/review.model";
import qs from "qs";
import { requestHandler } from "./http";

export const getReviews = async (
  coachId: number,
  sortOptions: TReviewFilter
) => {
  const query = qs.stringify({ coachId, sortOptions });

  return await requestHandler<IReviewList>(
    "get",
    `${API_PATH.review}?${query}`
  );
};

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
