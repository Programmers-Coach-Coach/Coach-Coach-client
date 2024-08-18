import { requestHandler } from "./http";
import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IRoutine, IRoutines } from "@/models/routine.model";

export const getRoutinesData = async (page: number) => {
  return await requestHandler<IRoutines>(
    "get",
    `${API_PATH.routine}?page=${page}`
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
