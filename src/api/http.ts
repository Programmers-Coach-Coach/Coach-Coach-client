import axios, { AxiosRequestConfig } from "axios";
import { getToken, removeTokens } from "../store/authStore";

const BASE_URL = "http://api.coach-coach.site";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true,
    ...config
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        removeTokens();
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();

type RequestMethod = "get" | "post" | "put" | "delete";
export const requesthandler = async <T>(
  method: RequestMethod,
  url: string,
  payload?: T
) => {
  let response;
  try {
    switch (method) {
      case "post":
        response = await httpClient.post(url, payload);
        break;
      case "get":
        response = await httpClient.get(url);
        break;
      case "put":
        response = await httpClient.put(url, payload);
        break;
      case "delete":
        response = await httpClient.delete(url);
        break;
      default:
        throw new Error("Unsupported method");
    }
    return response.data;
  } catch (error) {
    console.error("Request failed", error);
    throw error;
  }
};
