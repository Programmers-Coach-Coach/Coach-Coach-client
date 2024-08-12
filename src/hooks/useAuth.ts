import { login } from "@/api/auth.api";
import { ILogin } from "@/models/auth.model";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin } = useAuthStore();

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

  return {
    userLogin
  };
};

export default useAuth;
