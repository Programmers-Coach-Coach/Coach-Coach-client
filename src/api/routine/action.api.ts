import { requestHandler } from "../http";
import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IAction } from "@/models/routine.model";

export const postActionData = async (
  payload: Omit<IAction, "actionId">,
  categoryId: number
) => {
  return await requestHandler<IResponseMessage>(
    "post",
    `${API_PATH.category}/${categoryId}`,
    payload
  );
};

export const patchActionData = async (
  payload: Omit<IAction, "actionId">,
  actionId: number
) => {
  return await requestHandler<IResponseMessage>(
    "patch",
    `${API_PATH.action}/${actionId}`,
    payload
  );
};

export const deleteActionData = async (actionId: number) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `${API_PATH.action}/${actionId}`
  );
};
