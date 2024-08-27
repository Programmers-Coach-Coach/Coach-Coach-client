import { INotification } from "@/models/notification.model";
import { IDataPoint } from "@/models/record.model";
import dayjs from "dayjs";

export const getNotificationSorted = (
  data: INotification[]
): INotification[] => {
  return data.slice().sort((a, b) => {
    return dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1;
  });
};

export const getChartSorted = (data: IDataPoint[]): IDataPoint[] => {
  return data.slice().sort((a, b) => {
    return dayjs(a.recordDate).isBefore(dayjs(b.recordDate)) ? -1 : 1;
  });
};
