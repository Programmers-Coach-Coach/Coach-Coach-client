import { requestHandler } from "./http";
import { API_PATH } from "@/constants/apiPath";
import { IResponseMessage } from "@/models/responseMessage.model";
import { IGetRoutine, IRoutine, IRoutines } from "@/models/routine.model";
import qs from "qs";

export const getRoutinesData = async ({
  coachId,
  userId,
  page
}: IGetRoutine) => {
  const query = qs.stringify(
    {
      coachId,
      userId,
      page
    },
    {
      skipNulls: true
    }
  );

  return await requestHandler<IRoutines>("get", `${API_PATH.routine}?${query}`);
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
