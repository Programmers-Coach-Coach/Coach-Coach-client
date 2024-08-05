import {
  ISignup,
  ICheckEmailDuplication,
  ICheckNicknameDuplication
} from "@/models/auth.model";
import { createClient, requestHandler } from "./http";

export const signup = (formData: ISignup) => {
  return requestHandler("post", "auth/signup", formData);
};

export const emailDuplicate = async (formData: ICheckEmailDuplication) => {
  const client = createClient({
    params: {
      email: formData.email
    }
  });
  return await client.get("/auth/signup/check-email");
};

export const nicknameDuplicate = (formData: ICheckNicknameDuplication) => {
  return requestHandler("get", "/auth/check-nickname", formData);
};
