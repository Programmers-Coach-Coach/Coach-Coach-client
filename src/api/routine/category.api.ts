import { requestHandler } from "../http";
import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import { ICategoryName, ICompletedCategory } from "@/models/routine.model";

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
  payload: ICategoryName,
  categoryId: number
) => {
  return await requestHandler<IResponseMessage>(
    "patch",
    `${API_PATH.category}/${categoryId}`,
    payload
  );
};

export const deleteCategoryData = async (categoryId: number) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `${API_PATH.category}/${categoryId}`
  );
};

export const postCompletedCategoryData = async (categoryId: number) => {
  return await requestHandler<IResponseMessage | ICompletedCategory>(
    "post",
    `${API_PATH.category}/${categoryId}/completed`
  );
};

export const deleteCompletedCategoryData = async (categoryId: number) => {
  return await requestHandler<IResponseMessage | null>(
    "delete",
    `${API_PATH.category}/${categoryId}/completed`
  );
};
