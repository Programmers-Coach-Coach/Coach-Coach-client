import { ILogin } from "@/models/auth.model";
import { requestHandler } from "./http";
import { API_PATH } from "@/constants/apiPath";

export const getProfile = () => {
  return requestHandler("get", API_PATH.mypage);
};

export const getCoachProfile = () => {
  return requestHandler("get", API_PATH.coachMypage);
};

export const login = (formData: ILogin) => {
  return requestHandler("post", "/auth/login", formData);
};
