import { IResponseMessage } from "@/models/responseMessage.model";
import { requestHandler } from "./http";

export const likePost = async (id: number) => {
  return await requestHandler<IResponseMessage>("post", `coaches/${id}/likes`);
};

export const unlikePost = async (id: number) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `coaches/${id}/likes`
  );
};
