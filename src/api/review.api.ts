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
