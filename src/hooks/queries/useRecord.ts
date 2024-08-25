import {
  getDetailRecord,
  getStamps,
  postPhysicalMetrics
} from "@/api/record.api";
import { IPhysicalMetrics } from "@/models/record.model";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const usePostPhysicalMetrics = () => {
  const { mutate, isError } = useMutation<
    { id: number },
    Error,
    IPhysicalMetrics
  >({
    mutationFn: postPhysicalMetrics,
    onError: () => {
      toast.error("신체 정보 입력에 실패하였습니다");
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
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getDetailRecord", recordId],
    queryFn: () => getDetailRecord(recordId as number),
    enabled: recordId !== null // recordId가 없을 때 API 호출 막기
  });

  return { data, isError, isLoading };
};
