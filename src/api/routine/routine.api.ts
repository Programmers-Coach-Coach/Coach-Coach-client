import { requestHandler } from "../http";
import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IGetRoutine, IRoutine, IRoutineDetails } from "@/models/routine.model";
import qs from "qs";

export const getRoutinesData = async ({ coachId, userId }: IGetRoutine) => {
  const query = qs.stringify(
    {
      coachId,
      userId
    },
    {
      skipNulls: true
    }
  );

  return await requestHandler<IRoutine[]>(
    "get",
    `${API_PATH.routine}?${query}`
  );
};

export const getRoutineData = async (routineId: number) => {
  return await requestHandler<IRoutineDetails>(
    "get",
    `${API_PATH.routine}/${routineId}`
  );
};

export const postRoutineData = async (payload: Omit<IRoutine, "routineId">) => {
  return await requestHandler<IResponseMessage>(
    "post",
    `${API_PATH.routine}`,
    payload
  );
};

export const patchRoutineData = async (
  payload: Omit<IRoutine, "routineId">,
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
