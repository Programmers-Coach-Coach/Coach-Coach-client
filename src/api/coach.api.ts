import { API_PATH } from "@/constants/apiPath";
import {
  IAllCoachList,
  ICoachDetail,
  ICoachList,
  ISimpleCoach
} from "@/models/coach.model";
import { IMatchMembers } from "@/models/member.model";
import { IResponseMessage } from "@/models/responseMessage.model";
import qs from "qs";
import { requestHandler } from "./http";

export const getCoachAll = ({ filter, page }: IAllCoachList) => {
  const { search, sportsIdList, filterId } = filter;

  let latest: boolean | undefined;
  let review: boolean | undefined;
  let liked: boolean | undefined;
  let my: boolean | undefined;

  switch (filterId) {
    case 0:
      latest = true;
      break;
    case 1:
      review = true;
      break;
    case 2:
      liked = true;
      break;
    case 3:
      my = true;
      break;
  }

  let formattedSportsId;
  if (sportsIdList?.includes(0)) {
    formattedSportsId = null;
  } else {
    formattedSportsId = sportsIdList?.join(",");
  }

  const query = qs.stringify(
    {
      sports: formattedSportsId,
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
  return await requestHandler<ISimpleCoach[]>("get", API_PATH.myCoaches);
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
