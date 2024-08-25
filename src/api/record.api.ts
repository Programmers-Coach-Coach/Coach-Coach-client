import { API_PATH } from "@/constants/apiPath";
import {
  ICalendarStamps,
  IDetailRecords,
  IPhysicalMetrics
} from "@/models/record.model";
import { IResponseMessage } from "@/models/responseMessage.model";
import { todayFormat } from "@/utils/format";
import qs from "qs";
import { requestHandler } from "./http";

export const postPhysicalMetrics = async (data: IPhysicalMetrics) => {
  return await requestHandler<{ id: number }>("post", API_PATH.record, {
    recordDate: todayFormat(),
    ...data
  });
};

export const editPhysicalMetrics = async (
  recordId: number,
  data: IPhysicalMetrics
) => {
  return await requestHandler<IResponseMessage>(
    "put",
    `${API_PATH.record}/${recordId}`,
    data
  );
};

export const getStamps = async (year: number, month: number) => {
  const query = qs.stringify({ year, month });
  return await requestHandler<ICalendarStamps>(
    "get",
    `${API_PATH.record}?${query}`
  );
};

export const getDetailRecord = async (recordId: number) => {
  return await requestHandler<IDetailRecords>(
    "get",
    `${API_PATH.record}/${recordId}`
  );
};
