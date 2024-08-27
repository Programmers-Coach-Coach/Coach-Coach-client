import { queryClient } from "@/api/queryClient";
import {
  editPhysicalMetrics,
  getDetailRecord,
  getPhysicalChart,
  getStamps,
  postPhysicalMetrics
} from "@/api/record.api";
import {
  IPhysicalMetrics,
  IPhysicalMetricsWithDate,
  TChartType
} from "@/models/record.model";
import { IResponseMessage } from "@/models/responseMessage.model";
import { getChartSorted } from "@/utils/sort";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useQueryString from "../useQueryString";

export const usePostPhysicalMetrics = () => {
  const { setRecordId } = useQueryString();
  const { mutate, isError, isSuccess } = useMutation<
    { id: number },
    Error,
    IPhysicalMetricsWithDate
  >({
    mutationFn: postPhysicalMetrics,
    onSuccess: (data) => {
      setRecordId(data.id);
      toast.success("신체 정보를 입력하였습니다");
    },
    onError: () => {
      toast.error("신체 정보 입력에 실패하였습니다");
    }
  });

  return {
    isSuccess,
    isError,
    mutate
  };
};

interface IEditRequest {
  recordId: number;
  data: IPhysicalMetrics;
}

export const useEditPhysicalMetrics = (id: number | null) => {
  const { mutate, isError } = useMutation<
    IResponseMessage,
    Error,
    IEditRequest
  >({
    mutationFn: ({ recordId, data }) => editPhysicalMetrics(recordId, data),
    onSuccess: () => {
      toast.success("신체 정보를 수정하였습니다");
      // TODO: 백엔드에 response로 id 보내달라고 요청하기 (usePostPhysicalMetrics 처럼)
      if (id) {
        queryClient.refetchQueries({
          queryKey: ["getDetailRecord", id]
        });
      }
    },
    onError: () => {
      toast.error("신체 정보 수정에 실패하였습니다");
    }
  });

  return {
    isError,
    mutate
  };
};

export const useGetStamps = (year: number, month: number) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getStamp", year, month],
    queryFn: () => getStamps(year, month)
  });

  return { data, isError, isLoading };
};

export const useGetDetailRecord = (recordId: number | null) => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["getDetailRecord", recordId],
    queryFn: () => getDetailRecord(recordId as number),
    enabled: recordId !== null // recordId가 없을 때 API 호출 막기
  });

  return { data, isError, isLoading, refetch };
};

export const useGetPhysicalChart = (type: TChartType) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getPhysicalChart", type],
    queryFn: () => getPhysicalChart(type)
  });

  const sortedData = data ? getChartSorted(data) : undefined;

  return { data: sortedData, isError, isLoading };
};
