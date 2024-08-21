import { API_PATH } from "@/constants/apiPath";
import { INotification } from "@/models/notification.model";
import { requestHandler } from "./http";

export const getNotifications = async () => {
  return await requestHandler<INotification[]>(
    "get",
    API_PATH.getNotifications
  );
};
