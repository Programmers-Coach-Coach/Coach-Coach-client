import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { reissue } from "./auth.api";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const DEFAULT_TIMEOUT = 30000;

type RequestMethod = "get" | "post" | "put" | "delete" | "patch";

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api/v1`,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true,
    ...config
  });

  return axiosInstance;
};

export const httpClient = createClient();

const tokenReissue = async (storeLogout: () => void) => {
  try {
    const response = await reissue(); // 토큰 재발급
    return response; // 재발급 받은 토큰
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 500) {
        alert("세션이 만료되었습니다. 다시 로그인하세요.");
        storeLogout();
        window.location.href = "/login";
      }
    } else {
      toast.error("알 수 없는 오류 발생");
    }
    throw error;
  }
};

httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response; // 성공적인 응답은 그대로 반환
  },
  async (error: AxiosError) => {
    const { config, response } = error;

    if (response?.status === 401) {
      try {
        const { storeLogout } = useAuthStore();
        await tokenReissue(storeLogout); // 토큰 재발급 시도

        if (config) {
          return httpClient.request(config); // 원래의 요청을 재시도
        }
      } catch (err) {
        return Promise.reject(err);
      }
    } else if (response?.status === 500) {
      const { storeLogout } = useAuthStore();
      alert("세션이 만료되었습니다. 다시 로그인하세요.");
      storeLogout();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export const requestHandler = async <T>(
  method: RequestMethod,
  url: string,
  payload?: unknown
): Promise<T> => {
  let response: AxiosResponse<T>;

  switch (method) {
    case "get":
      response = await httpClient.get<T>(url);
      break;
    case "post":
      response = await httpClient.post<T>(url, payload);
      break;
    case "put":
      response = await httpClient.put<T>(url, payload);
      break;
    case "patch":
      response = await httpClient.patch<T>(url, payload);
      break;
    case "delete":
      response = await httpClient.delete<T>(url);
      break;
    default:
      throw new Error("Unsupported request method");
  }

  return response.data;
};
