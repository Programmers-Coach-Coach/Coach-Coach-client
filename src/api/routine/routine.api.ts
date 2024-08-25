import { requestHandler } from "../http";
import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import {
  IGetQuery,
  IGetRoutine,
  IPostRoutine,
  IRoutineDetails
} from "@/models/routine.model";
import qs from "qs";

export const getRoutinesData = async ({ coachId, userId }: IGetQuery) => {
  const query = qs.stringify(
    {
      coachId,
      userId
    },
    {
      skipNulls: true
    }
  );

  return await requestHandler<IGetRoutine[]>(
    "get",
    `${API_PATH.routine}?${query}`
  );
};

export const getRoutineData = async (
  { coachId, userId }: IGetQuery,
  routineId: number
) => {
  const query = qs.stringify(
    {
      coachId,
      userId
    },
    {
      skipNulls: true
    }
  );
  return await requestHandler<IRoutineDetails>(
    "get",
    `${API_PATH.routine}/${routineId}?${query}`
  );
};

export const postRoutineData = async (
  payload: Omit<IPostRoutine, "routineId">
) => {
  return await requestHandler<IResponseMessage>(
    "post",
    `${API_PATH.routine}`,
    payload
  );
};

export const patchRoutineData = async (
  payload: Omit<IPostRoutine, "routineId">,
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
