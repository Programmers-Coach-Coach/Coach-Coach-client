import { API_PATH } from "@/constants/apiPath";
import { requestHandler } from "./http";
import qs from "qs";
import { IAllCoachList } from "@/models/coach.model";

export const getCoachAll = (filter: IAllCoachList) => {
  const { page, sports, search, latest, review, liked, my } = filter;
  const query = qs.stringify({
    page,
    sports,
    search,
    latest,
    review,
    liked,
    my
  });
  return requestHandler("get", `${API_PATH.getCoachAll}?${query}`);
};
