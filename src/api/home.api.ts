import { IHomeData } from "@/models/home.model";
import { requestHandler } from "./http";
import { API_PATH } from "@/constants/apiPath";

export const getHomeData = async () => {
  return await requestHandler<IHomeData>("get", API_PATH.main);
};
