import { ICheckPassword, ILogin, IUserProfile } from "@/models/auth.model";
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
  return requestHandler("post", API_PATH.login, formData);
};

export const signup = (formData: ISignup) => {
  return requestHandler("post", API_PATH.signup, formData);
};

export const emailDuplicate = async (formData: ICheckEmailDuplication) => {
  const client = createClient({
    params: {
      email: formData.email
    }
  });
  return await client.get(API_PATH.checkEmail);
};

export const nicknameDuplicate = async (
  formData: ICheckNicknameDuplication
) => {
  const client = createClient({
    params: {
      nickname: formData.nickname
    }
  });
  return await client.get(API_PATH.checkNickname);
};

export const checkPassword = async (formData: ICheckPassword) => {
  return requestHandler("post", API_PATH.checkPassword, formData);
};
