import {
  checkPassword,
  editCoachProfile,
  editProfile,
  login,
  logout,
  withdraw
} from "@/api/auth.api";
import { ICheckPassword, ILogin } from "@/models/auth.model";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { emailDuplicate, nicknameDuplicate, signup } from "@/api/auth.api";
import {
  ICheckEmailDuplication,
  ICheckNicknameDuplication,
  ISignup
} from "@/models/auth.model";
import { IMyPageCoachFormWithSports } from "@/models/coach.model";

const useAuth = () => {
  const navigate = useNavigate();
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false); //과정에서 오류가 있었는지 확인하는 상태
  const [isNicknameError, setIsNicknameError] = useState<boolean>(false);
  const [emailChecked, setEmailChecked] = useState<boolean>(false); //이메일 중복 확인이 완료되었는지 여부
  const [nicknameChecked, setNicknameChecked] = useState<boolean>(false);
  const { storeLogin, storeLogout } = useAuthStore();

  const userSignup = (formData: ISignup) => {
    signup(formData)
      .then(() => {
        navigate("/login");
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
        navigate("/");
        toast.success("로그인 성공");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const userLogout = () => {
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

  const passwordCheck = (formData: ICheckPassword) => {
    checkPassword(formData)
      .then(() => {
        setIsPasswordConfirmed(true);
        toast.success("비밀번호 확인 성공");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
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
      .catch(() => {
        toast.error("프로필 업데이트 중 오류가 발생했습니다.");
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
    isPasswordConfirmed,
    editUserCoachProfile,
    passwordCheck,
    userLogout
  };
};

export default useAuth;
