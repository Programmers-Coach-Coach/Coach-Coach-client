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

export const usePostPhysicalMetrics = () => {
  const { mutate, isError, isSuccess } = useMutation<
    IResponseMessage,
    Error,
    IPhysicalMetricsWithDate
  >({
    mutationFn: postPhysicalMetrics,
    onSuccess: () => {
      toast.success("신체 정보를 입력하였습니다");
      queryClient.invalidateQueries({
        queryKey: ["getDetailRecord"]
      });
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

// TODO: enabled 처리에 대한 블로그 작성
export const useGetDetailRecord = (recordDate: string | null) => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["getDetailRecord", recordDate],
    queryFn: () => getDetailRecord(recordDate as string),
    enabled: recordDate !== null // recordId가 없을 때 API 호출 막기
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
