import { API_PATH } from "@/constants/apiPath";
import {
  ICalendarStamps,
  IDataPoint,
  IDetailRecords,
  IPhysicalMetrics,
  IPhysicalMetricsWithDate,
  TChartType
} from "@/models/record.model";
import { IResponseMessage } from "@/models/responseMessage.model";
import qs from "qs";
import { requestHandler } from "./http";

export const postPhysicalMetrics = async (data: IPhysicalMetricsWithDate) => {
  const { recordDate, ...rest } = data;
  const query = qs.stringify({ record_date: recordDate });

  return await requestHandler<IResponseMessage>(
    "post",
    `${API_PATH.recordV2}?${query}`,
    rest
  );
};

// TODO: 삭제
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

export const getDetailRecord = async (recordDate: string) => {
  const query = qs.stringify({ record_date: recordDate });

  return await requestHandler<IDetailRecords>(
    "get",
    `${API_PATH.recordV2}?${query}`
  );
};

export const getPhysicalChart = async (type: TChartType) => {
  const query = qs.stringify({ type });
  return await requestHandler<IDataPoint[]>(
    "get",
    `${API_PATH.recordChart}?${query}`
  );
};
