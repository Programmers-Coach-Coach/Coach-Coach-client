import { API_PATH } from "@/constants/apiPath";
import {
  IAuthResponse,
  ICheckEmailDuplication,
  ICheckNicknameDuplication,
  ICheckPassword,
  ILogin,
  ISignup,
  IUserProfile
} from "@/models/auth.model";
import { ICoachDetail, IMyPageCoachFormValues } from "@/models/coach.model";
import { AxiosResponse } from "axios";
import { createClient, httpClient, requestHandler } from "./http";

export const getProfile = async () => {
  return await requestHandler<IUserProfile>("get", API_PATH.mypage);
};

export const getCoachProfile = async () => {
  return await requestHandler<ICoachDetail>("get", API_PATH.coachMypage);
};

export const login = async (formData: ILogin) => {
  return await requestHandler("post", API_PATH.login, formData);
};

export const logout = async () => {
  return await requestHandler("delete", API_PATH.logout);
};

export const signup = async (formData: ISignup) => {
  return await requestHandler("post", API_PATH.signup, formData);
};

export const reissue = async () => {
  return await requestHandler<AxiosResponse>("get", API_PATH.reissue);
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

export const editProfile = async (formData: FormData) => {
  return await httpClient.put(API_PATH.editMyProfile, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export const editCoachProfile = async (formData: IMyPageCoachFormValues) => {
  return await requestHandler("put", API_PATH.editMyCoachProfile, formData);
};

export const getAuth = async () => {
  return await requestHandler<IAuthResponse>("get", API_PATH.auth);
};
