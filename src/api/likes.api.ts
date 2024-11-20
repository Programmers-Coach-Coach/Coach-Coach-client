import { IResponseMessage } from "@/models/responseMessage.model";
import { requestHandler } from "./http";

export const likePost = async (id: number) => {
  return await requestHandler<IResponseMessage>(
    "post",
    `/v1/coaches/${id}/likes`
  );
};

export const unlikePost = async (id: number) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `/v1/coaches/${id}/likes`
  );
};
