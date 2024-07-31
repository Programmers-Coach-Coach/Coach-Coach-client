import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://api.coach-coach.site";
const DEFAULT_TIMEOUT = 30000;

type RequestMethod = "get" | "post" | "put" | "delete";

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
    case "delete":
      response = await httpClient.delete(url);
      break;
  }
  return response.data;
};
