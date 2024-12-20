import { IProfile } from "@/models/profile.model";
import { requestHandler } from "./http";
import { API_PATH } from "@/constants/apiPath";
import { IRoutineQuery } from "@/models/routine.model";
import qs from "qs";

export const getUserProfile = async ({ coachId, userId }: IRoutineQuery) => {
  const query = qs.stringify(
    {
      coachId,
      userId
    },
    {
      skipNulls: true
    }
  );

  return await requestHandler<IProfile>(
    "get",
    `${API_PATH.userProfile}?${query}`
  );
};
