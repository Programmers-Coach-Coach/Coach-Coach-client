import { AxiosError } from "axios";

export const conflictError = (error: Error) => {
  return error instanceof AxiosError && error.response?.status === 409;
};
