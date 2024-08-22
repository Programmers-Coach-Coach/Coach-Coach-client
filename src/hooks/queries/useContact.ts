import { contact } from "@/api/coach.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { useMutation } from "@tanstack/react-query";

export const useContact = () => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: (id: number) => contact(id),
    onSuccess: () => {}
  });

  return {
    isError,
    mutate
  };
};
