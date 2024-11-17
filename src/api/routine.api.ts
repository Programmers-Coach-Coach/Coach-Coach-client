import { requestHandler } from "./http";
import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import {
  IGetRoutineList,
  IPostPatchRoutine,
  IRoutineQuery
} from "@/models/routine.model";
import qs from "qs";

export const getRoutinesData = async ({ coachId, userId }: IRoutineQuery) => {
  const query = qs.stringify(
    {
      coachId,
      userId
    },
    {
      skipNulls: true
    }
  );

  return await requestHandler<IGetRoutineList>(
    "get",
    `${API_PATH.routine}?${query}`
  );
};

export const postRoutineData = async (payload: IPostPatchRoutine) => {
  return await requestHandler<IResponseMessage>(
    "post",
    `${API_PATH.routine}`,
    payload
  );
};

export const patchRoutineData = async (
  payload: IPostPatchRoutine,
  routineId: number
) => {
  return await requestHandler<IResponseMessage>(
    "patch",
    `${API_PATH.routine}/${routineId}`,
    payload
  );
};

export const deleteRoutineData = async (routineId: number) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `${API_PATH.routine}/${routineId}`
  );
};
