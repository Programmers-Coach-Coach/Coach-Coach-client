import { getNotifications } from "@/api/notification.api";
import { useQuery } from "@tanstack/react-query";

export const useFetchNotifications = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getNotifications"],
    queryFn: getNotifications
  });

  return { data, isError, isLoading };
};
