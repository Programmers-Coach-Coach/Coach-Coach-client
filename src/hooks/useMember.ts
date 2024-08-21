import {
  deleteMatchMember,
  getMatchMembers,
  patchMatchMember
} from "@/api/coach.api";
import { queryClient } from "@/api/queryClient";
import { IMatchMembers } from "@/models/member.model";
import { IResponseMessage } from "@/models/responseMessage.model";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useMatchMember = () => {
  const { data, isLoading, isError } = useQuery<IMatchMembers[]>({
    queryKey: ["getMatchMembers"],
    queryFn: getMatchMembers
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
    onSuccess: (data) => {
      console.log("Member successfully deleted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getMatchMembers"] });
    },
    onError: (error) => {
      console.error("Failed to delete Member: ", error);
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
    onSuccess: (data) => {
      console.log("Member successfully deleted: ", data);
      queryClient.invalidateQueries({ queryKey: ["getMatchMembers"] });
    },
    onError: (error) => {
      console.error("Failed to delete Member: ", error);
    }
  });

  return {
    mutate,
    isLoading: isPending,
    isError,
    data
  };
};
