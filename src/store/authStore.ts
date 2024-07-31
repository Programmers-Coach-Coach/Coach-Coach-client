import Cookies from "js-cookie";
import { create } from "zustand";

export const setTokens = (accessToken: string, refreshToken: string) => {
  Cookies.set("accessToken", accessToken, { expires: 7 });
  Cookies.set("refreshToken", refreshToken, { expires: 30 });
};

export const getToken = () => {
  return Cookies.get("accessToken");
};

export const removeTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

interface StoreState {
  isloggedIn: boolean;
  storeLogin: (accessToken: string, refreshToken: string) => void;
  storeLogout: () => void;
}

export const useAuthStore = create<StoreState>((set) => ({
  // 로그인 상태를 초기화
  isloggedIn: Boolean(Cookies.get("accessToken")),
  storeLogin: (accessToken: string, refreshToken: string) => {
    set({
      isloggedIn: true
    });
    setTokens(accessToken, refreshToken);
  },
  storeLogout: () => {
    set({
      isloggedIn: false
    });
    removeTokens();
  }
}));
