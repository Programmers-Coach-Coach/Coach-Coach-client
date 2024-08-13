import { ILogin, IUserProfile } from "@/models/auth.model";
import { createClient, requestHandler } from "./http";
import { API_PATH } from "@/constants/apiPath";
import {
  ISignup,
  ICheckEmailDuplication,
  ICheckNicknameDuplication
} from "@/models/auth.model";
import { ICoachDetail } from "@/models/coach.model";

export const getProfile = () => {
  return requestHandler<IUserProfile>("get", API_PATH.mypage);
};

export const getCoachProfile = () => {
  return requestHandler<ICoachDetail>("get", API_PATH.coachMypage);
};

export const login = (formData: ILogin) => {
  return requestHandler("post", "/auth/login", formData);
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
