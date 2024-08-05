import axios, { AxiosRequestConfig } from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "https://api.coach-coach.site";
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

const httpClient = createClient();

export const requestHandler = async <T>(
  method: RequestMethod,
  url: string,
  payload?: T
) => {
  let response;
  switch (method) {
    case "get":
      response = await httpClient.get(url);
      break;
    case "post":
      response = await httpClient.post(url, payload);
      break;
    case "put":
      response = await httpClient.put(url, payload);
      break;
    case "patch":
      response = await httpClient.patch(url, payload);
      break;
    case "delete":
      response = await httpClient.delete(url);
      break;
  }
  return response.data;
};
