import { API_PATH } from "@/constants/apiPath";
import {
  ICheckEmailDuplication,
  ICheckNicknameDuplication,
  ICheckPassword,
  ILogin,
  ISignup,
  IUserProfile
} from "@/models/auth.model";
import { ICoachDetail } from "@/models/coach.model";
import { createClient, requestHandler } from "./http";

export const getProfile = async () => {
  return await requestHandler<IUserProfile>("get", API_PATH.mypage);
};

export const getCoachProfile = async () => {
  return await requestHandler<ICoachDetail>("get", API_PATH.coachMypage);
};

export const login = async (formData: ILogin) => {
  return await requestHandler("post", API_PATH.login, formData);
};

export const signup = async (formData: ISignup) => {
  return await requestHandler("post", API_PATH.signup, formData);
};

export const withdraw = async () => {
  return await requestHandler("delete", API_PATH.withdraw);
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
  return await requestHandler("post", API_PATH.checkPassword, formData);
};
