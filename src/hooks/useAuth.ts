import { login } from "@/api/auth.api";
import { ILogin } from "@/models/auth.model";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TOAST_MESSAGE = {
  login: {
    success: "로그인 성공",
    error: "로그인 실패"
  }
};
const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin } = useAuthStore();

  const userLogin = (formData: ILogin) => {
    login(formData)
      .then(() => {
        storeLogin();
        navigate("/");
        toast.success(TOAST_MESSAGE.login.success);
      })
      .catch(() => {
        toast.error(TOAST_MESSAGE.login.error);
      });
  };

  return {
    userLogin
  };
};

export default useAuth;
