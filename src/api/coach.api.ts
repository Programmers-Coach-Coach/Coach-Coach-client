import { API_PATH } from "@/constants/apiPath";
import { IAllCoachList, ICoachList, ISimpleCoach } from "@/models/coach.model";
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

  const query = qs.stringify(
    {
      sportsId: sportsIdList,
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

  console.log(query);

  return requestHandler<ICoachList>("get", `${API_PATH.getCoachAll}?${query}`);
};

export const getMyCoaches = async () => {
  return await requestHandler<ISimpleCoach[]>("get", API_PATH.myCoaches);
};
