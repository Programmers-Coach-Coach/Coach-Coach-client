import {
  deleteMatchMember,
  getMatchMembers,
  patchMatchMember
} from "@/api/coach.api";
import { queryClient } from "@/api/queryClient";
import { IMatchMembers } from "@/models/member.model";
import { IResponseMessage } from "@/models/responseMessage.model";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export const useMatchMember = (isCoach: boolean) => {
  const { data, isLoading, isError } = useQuery<IMatchMembers[]>({
    queryKey: ["getMatchMembers"],
    queryFn: getMatchMembers,
    enabled: isCoach // isCoach가 true일 때만 쿼리를 실행
  });

  return {
    data,
    isLoading,
    isError
  };
};

export const useDeleteMember = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    number
  >({
    mutationFn: deleteMatchMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getMatchMembers"] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "요청 중 오류가 발생했습니다."
        );
      }
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};

export const usePatchMember = () => {
  const { mutate, isPending, isError, data } = useMutation<
    IResponseMessage,
    Error,
    number
  >({
    mutationFn: patchMatchMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getMatchMembers"] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "요청 중 오류가 발생했습니다."
        );
      }
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};
