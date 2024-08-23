import { API_PATH } from "@/constants/apiPath";
import { IPhysicalMetrics } from "@/models/record.model";
import { IResponseMessage } from "@/models/responseMessage.model";
import { todayFormat } from "@/utils/format";
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
