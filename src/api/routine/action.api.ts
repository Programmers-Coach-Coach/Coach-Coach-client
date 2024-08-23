import { requestHandler } from "../http";
import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IAction } from "@/models/routine.model";

export const postActionData = async (
  payload: Omit<IAction, "actionId">,
  routineId: number,
  categoryId: number
) => {
  return await requestHandler<IResponseMessage>(
    "post",
    `${API_PATH.routine}/${routineId}/${categoryId}`,
    payload
  );
};

export const patchActionData = async (
  payload: Omit<IAction, "actionId">,
  routineId: number,
  categoryId: number,
  actionId: number
) => {
  return await requestHandler<IResponseMessage>(
    "patch",
    `${API_PATH.routine}/${routineId}/${categoryId}/${actionId}`,
    payload
  );
};

export const deleteActionData = async (
  routineId: number,
  categoryId: number,
  actionId: number
) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `${API_PATH.routine}/${routineId}/${categoryId}/${actionId}`
  );
};
