import { API_PATH } from "@/constants/apiPath";
import { IPopularCoach } from "@/models/coach.model";
import { IHomeData } from "@/models/home.model";
import { ISport } from "@/models/sports.model";
import { requestHandler } from "./http";

export const getHomeData = async () => {
  return await requestHandler<IHomeData>("get", API_PATH.main);
};

export const getPopularCoaches = async () => {
  return await requestHandler<IPopularCoach[]>("get", API_PATH.popularCoaches);
};

export const getSports = async () => {
  return await requestHandler<ISport[]>("get", API_PATH.sports);
};
