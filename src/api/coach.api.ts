import { API_PATH } from "@/constants/apiPath";
import { requestHandler } from "./http";
import qs from "qs";
import { IAllCoachList, ICoachList } from "@/models/coach.model";

export const getCoachAll = ({ filter, page }: IAllCoachList) => {
  const { sports, search, latest, review, liked, my } = filter;
  const query = qs.stringify({
    sports,
    search,
    latest,
    review,
    liked,
    my,
    page
  });

  return requestHandler<ICoachList>("get", `${API_PATH.getCoachAll}?${query}`);
};
