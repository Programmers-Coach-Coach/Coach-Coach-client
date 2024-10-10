import { useState } from "react";
import {
  checkPassword,
  editCoachProfile,
  editProfile,
  login,
  logout,
  withdraw,
  emailDuplicate,
  nicknameDuplicate,
  signup
} from "@/api/auth.api";
import {
  ICheckPassword,
  ILogin,
  ISignup,
  ICheckEmailDuplication,
  ICheckNicknameDuplication
} from "@/models/auth.model";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { IMyPageCoachFormWithSports } from "@/models/coach.model";

const useAuth = () => {
  const navigate = useNavigate();
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isNicknameError, setIsNicknameError] = useState<boolean>(false);
  const [emailChecked, setEmailChecked] = useState<boolean>(false);
  const [nicknameChecked, setNicknameChecked] = useState<boolean>(false);
  const [step, setStep] = useState<"가입" | "가입성공">("가입"); // step 상태 추가
  const { storeLogin, storeLogout } = useAuthStore();

  const userSignup = (formData: ISignup) => {
    signup(formData)
      .then(() => {
        setStep("가입성공"); // 회원가입 성공 시 step 변경
        toast.success("회원가입 성공");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const userLogin = (formData: ILogin) => {
    login(formData)
      .then(() => {
        storeLogin();
        navigate("/home");
        toast.success("로그인 성공");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const userLogout = async () => {
    logout()
      .then(() => {
        storeLogout();
        navigate("/login");
        toast.success("로그아웃 성공");
      })
      .catch(() => {
        toast.error("로그아웃 실패");
      });
  };

  const emailDuplication = (formData: ICheckEmailDuplication) => {
    emailDuplicate(formData)
      .then(() => {
        setIsEmailError(false);
        setEmailChecked(true);
        toast.success("사용가능한 이메일입니다.");
      })
      .catch((error) => {
        setIsEmailError(true);
        setEmailChecked(false);
        toast.error(error.response.data.message);
      });
  };

  const nicknameDuplication = (formData: ICheckNicknameDuplication) => {
    nicknameDuplicate(formData)
      .then(() => {
        setIsNicknameError(false);
        setNicknameChecked(true);
        toast.success("사용가능한 닉네임입니다.");
      })
      .catch((error) => {
        setIsNicknameError(true);
        setNicknameChecked(false);
        toast.error(error.response.data.message);
      });
  };

  const passwordCheck = async (formData: ICheckPassword): Promise<boolean> => {
    try {
      await checkPassword(formData);
      toast.success("비밀번호 확인 성공");
      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "요청 중 오류가 발생했습니다."
        );
      }
      return false;
    }
  };

  const withdrawUser = () => {
    withdraw()
      .then(() => {
        toast.success("회원탈퇴 완료");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const editUserProfile = (formData: FormData) => {
    editProfile(formData)
      .then(() => {
        toast.success("프로필이 성공적으로 업데이트되었습니다.");
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response?.status === 409) {
            toast.error("이미 사용 중인 닉네임입니다.");
          } else {
            toast.error("프로필 업데이트 중 오류가 발생했습니다.");
          }
        } else {
          toast.error("알 수 없는 오류가 발생했습니다.");
        }
      });
  };
  const editUserCoachProfile = (formData: IMyPageCoachFormWithSports) => {
    editCoachProfile(formData)
      .then(() => {
        toast.success("프로필이 성공적으로 업데이트되었습니다.");
      })
      .catch(() => {
        toast.error("프로필 업데이트 중 오류가 발생했습니다.");
      });
  };

  return {
    userLogin,
    withdrawUser,
    userSignup,
    emailDuplication,
    editUserProfile,
    nicknameDuplication,
    isEmailError,
    isNicknameError,
    emailChecked,
    nicknameChecked,
    editUserCoachProfile,
    passwordCheck,
    userLogout,
    step,
    setStep
  };
};

export default useAuth;
