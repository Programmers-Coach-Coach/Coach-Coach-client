import { API_PATH } from "@/constants/apiPath";
import { INotification } from "@/models/notification.model";
import { IResponseMessage } from "@/models/responseMessage.model";
import { requestHandler } from "./http";

export const getNotifications = async () => {
  return await requestHandler<INotification[]>("get", API_PATH.notification);
};

export const deleteNotification = async (id: number) => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `${API_PATH.notification}/${id}`
  );
};

export const deleteAllNotification = async () => {
  return await requestHandler<IResponseMessage>(
    "delete",
    `${API_PATH.notification}`
  );
};
