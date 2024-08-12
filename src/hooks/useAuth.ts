import { useState } from "react";
import { emailDuplicate, nicknameDuplicate, signup } from "@/api/auth.api";
import {
  ICheckEmailDuplication,
  ICheckNicknameDuplication,
  ISignup
} from "@/models/auth.model";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const TOAST_MESSAGE = {
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
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isNicknameError, setIsNicknameError] = useState<boolean>(false);
  const [emailChecked, setEmailChecked] = useState<boolean>(false);
  const [nicknameChecked, setNicknameChecked] = useState<boolean>(false);

  const userSignup = (formData: ISignup) => {
    signup(formData)
      .then(() => {
        navigate("/login");
        toast.success(TOAST_MESSAGE.signup.success);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        toast.error(TOAST_MESSAGE.signup.error);
      });
  };

  const emailDuplication = (formData: ICheckEmailDuplication) => {
    emailDuplicate(formData)
      .then(() => {
        setIsEmailError(false);
        setEmailChecked(true); // 이메일 중복 확인 완료
        toast.success(TOAST_MESSAGE.emailDuplication.success);
      })
      .catch(() => {
        setIsEmailError(true);
        setEmailChecked(false); // 이메일 중복 확인 실패
        toast.error(TOAST_MESSAGE.emailDuplication.error);
      });
  };

  const nicknameDuplication = (formData: ICheckNicknameDuplication) => {
    nicknameDuplicate(formData)
      .then(() => {
        setIsNicknameError(false);
        setNicknameChecked(true); // 닉네임 중복 확인 완료
        toast.success(TOAST_MESSAGE.nicknameDuplication.success);
      })
      .catch(() => {
        setIsNicknameError(true);
        setNicknameChecked(false); // 닉네임 중복 확인 실패
        toast.error(TOAST_MESSAGE.nicknameDuplication.error);
      });
  };

  return {
    userSignup,
    emailDuplication,
    nicknameDuplication,
    isEmailError,
    isNicknameError,
    emailChecked,
    nicknameChecked
  };
};
