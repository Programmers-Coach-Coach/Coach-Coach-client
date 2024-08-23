import { requestHandler } from "../http";
import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import { ICategoryName } from "@/models/routine.model";

export const postCategoryData = async (
  payload: ICategoryName,
  routineId: number
) => {
  return await requestHandler<IResponseMessage>(
    "post",
    `${API_PATH.routine}/${routineId}`,
    payload
  );
};

export const patchCategoryData = async (
  payload: string,
  routineId: number,
  categoryId: number
) => {
  return await requestHandler<IResponseMessage>(
    "patch",
    `${API_PATH.routine}/${routineId}/${categoryId}`,
    payload
  );
};

export const deleteCategoryData = async (
  routineId: number,
  categoryId: number
) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `${API_PATH.routine}/${routineId}/${categoryId}`
  );
};

export const postCompletedCategoryData = async (
  routineId: number,
  categoryId: number
) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `${API_PATH.routine}/${routineId}/${categoryId}/completed`
  );
};
