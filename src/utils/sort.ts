import { INotification } from "@/models/notification.model";
import dayjs from "dayjs";

export const getNotificationSorted = (
  data: INotification[]
): INotification[] => {
  return data.slice().sort((a, b) => {
    return dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1;
  });
};
