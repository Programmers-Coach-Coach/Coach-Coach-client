import { postPhysicalMetrics } from "@/api/record.api";
import { IPhysicalMetrics } from "@/models/record.model";
import { useMutation } from "@tanstack/react-query";
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
