import { contact } from "@/api/coach.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { conflictError } from "@/utils/error";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useContact = () => {
  const { mutate, isError, isSuccess } = useMutation<
    IResponseMessage,
    Error,
    number
  >({
    mutationFn: (id: number) => contact(id),
    onSuccess: () => {
      toast.success("신청이 완료됐어요");
    },
    onError: (error) => {
      if (conflictError(error)) {
        toast.error("이미 신청이 완료된 코치입니다");
      }
    }
  });

  return { isSuccess, isError, mutate };
};
