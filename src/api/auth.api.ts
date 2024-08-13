import { createClient, requestHandler } from "./http";
import { API_PATH } from "@/constants/apiPath";
import {
  ISignup,
  ICheckEmailDuplication,
  ICheckNicknameDuplication
} from "@/models/auth.model";

export const getProfile = () => {
  return requestHandler("get", API_PATH.mypage);
};

export const getCoachProfile = () => {
  return requestHandler("get", API_PATH.coachMypage);
};

export const signup = (formData: ISignup) => {
  return requestHandler("post", "auth/signup", formData);
};

export const emailDuplicate = async (formData: ICheckEmailDuplication) => {
  const client = createClient({
    params: {
      email: formData.email
    }
  });
  return await client.get("/auth/check-email");
};

export const nicknameDuplicate = async (
  formData: ICheckNicknameDuplication
) => {
  const client = createClient({
    params: {
      nickname: formData.nickname
    }
  });
  return await client.get("/auth/check-nickname");
};
