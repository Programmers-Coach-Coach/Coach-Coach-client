import { contact } from "@/api/coach.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { conflictError } from "@/utils/error";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useContact = () => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: (id: number) => contact(id),
    onSuccess: () => {},
    onError: (error) => {
      if (conflictError(error)) {
        toast.error("이미 문의가 완료된 코치입니다");
      }
    }
  });

  return {
    isError,
    mutate
  };
};
