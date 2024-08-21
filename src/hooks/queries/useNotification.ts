import { deleteNotification, getNotifications } from "@/api/notification.api";
import { queryClient } from "@/api/queryClient";
import { IResponseMessage } from "@/models/responseMessage.model";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useFetchNotifications = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getNotifications"],
    queryFn: getNotifications
  });

  return { data, isError, isLoading };
};

export const useDeleteNotification = (id: number) => {
  const { mutate, isError } = useMutation<IResponseMessage, Error>({
    mutationFn: () => deleteNotification(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getNotifications"] });
    },
    onError: (error) => {
      console.error(error);
    }
  });

  return {
    isError,
    mutate
  };
};
