import {
  deleteAllNotification,
  deleteNotification,
  getNotifications
} from "@/api/notification.api";
import { queryClient } from "@/api/queryClient";
import { IResponseMessage } from "@/models/responseMessage.model";
import { getNotificationSorted } from "@/utils/sort";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useFetchNotifications = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getNotifications"],
    queryFn: getNotifications
  });

  const sortedData = data ? getNotificationSorted(data) : undefined;

  return { data: sortedData, isError, isLoading };
};

export const useDeleteNotification = () => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: (id: number) => deleteNotification(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getNotifications"] });
      queryClient.invalidateQueries({ queryKey: ["getAuth"] });
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

export const useDeleteAllNotification = () => {
  const { mutate, isError } = useMutation<IResponseMessage, Error>({
    mutationFn: deleteAllNotification,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getNotifications"] });
      queryClient.invalidateQueries({ queryKey: ["getAuth"] });
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
