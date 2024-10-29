import { API_PATH } from "@/constants/apiPath";
import { ICoachDetail, ICoachList, IGetMyCoach } from "@/models/coach.model";
import { IMatchMembers } from "@/models/member.model";
import { IResponseMessage } from "@/models/responseMessage.model";
import qs from "qs";
import { requestHandler } from "./http";

export const getCoachAll = (
  page: number,
  search: string | null,
  sort: string,
  sportsIds: number[]
) => {
  let latest: boolean | undefined;
  let review: boolean | undefined;
  let liked: boolean | undefined;
  let my: boolean | undefined;

  switch (sort) {
    case "review":
      review = true;
      break;
    case "liked":
      liked = true;
      break;
    case "my":
      my = true;
      break;
    default:
      latest = true;
      break;
  }

  const query = qs.stringify(
    {
      sports: sportsIds.length === 0 ? null : sportsIds.join(","),
      search,
      latest,
      review,
      liked,
      my,
      page
    },
    {
      skipNulls: true // undefined 값은 쿼리에 포함x
    }
  );

  return requestHandler<ICoachList>("get", `${API_PATH.getCoachAll}?${query}`);
};

export const getMyCoaches = async () => {
  return await requestHandler<IGetMyCoach[]>("get", API_PATH.myCoaches);
};

export const getMatchMembers = async () => {
  return await requestHandler<IMatchMembers[]>("get", API_PATH.match);
};

export const deleteMatchMember = async (userId: number) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `${API_PATH.match}/${userId}`
  );
};

export const patchMatchMember = async (userId: number) => {
  return await requestHandler<IResponseMessage>(
    "patch",
    `${API_PATH.match}/${userId}`
  );
};

export const getCoachDetail = async (id: number) => {
  const query = qs.stringify({ coachId: id });
  return await requestHandler<ICoachDetail>(
    "get",
    `${API_PATH.coachMypage}?${query}`
  );
};

export const contact = async (id: number) => {
  return await requestHandler<IResponseMessage>(
    "post",
    `/coaches/${id}/contact`
  );
};
