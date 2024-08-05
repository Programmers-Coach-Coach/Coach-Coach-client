import { useState } from "react";
import { AxiosError } from "axios";
import { emailDuplicate, nicknameDuplicate, signup } from "@/api/auth.api";
import {
  ICheckEmailDuplication,
  ICheckNicknameDuplication,
  ISignup
} from "@/models/auth.model";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MESSAGE = {
  signup: {
    success: "회원가입 성공",
    error: "회원가입 실패"
  },
  nicknameDuplication: {
    success: "사용 가능한 닉네임입니다.",
    error: "사용 불가능한 닉네임입니다."
  },
  emailDuplication: {
    success: "사용 가능한 이메일입니다.",
    error: "사용 불가능한 이메일입니다."
  }
};

export const useAuth = () => {
  const navigate = useNavigate();
  const [isEmailError, setIsEmailError] = useState<AxiosError | null>(null);
  const [isNicknameError, setIsNicknameError] = useState<AxiosError | null>(
    null
  );

  const userSignup = (formData: ISignup) => {
    signup(formData)
      .then(() => {
        navigate("/login");
        toast.success(MESSAGE.signup.success);
      })
      .catch((error) => {
        console.log(error);
        toast.error(MESSAGE.signup.error);
      });
  };

  const emailDuplication = (formData: ICheckEmailDuplication) => {
    emailDuplicate(formData)
      .then(() => {
        toast.success(MESSAGE.emailDuplication.success);
      })
      .catch((error) => {
        console.log(error);
        setIsEmailError(error);
        toast.error(MESSAGE.emailDuplication.error);
      });
  };

  const nicknameDuplication = (formData: ICheckNicknameDuplication) => {
    nicknameDuplicate(formData)
      .then(() => {
        toast.success(MESSAGE.nicknameDuplication.success);
      })
      .catch((error) => {
        console.log(error);
        setIsNicknameError(error);
        toast.error(MESSAGE.nicknameDuplication.error);
      });
  };

  return {
    userSignup,
    emailDuplication,
    nicknameDuplication,
    isEmailError,
    isNicknameError
  };
};
