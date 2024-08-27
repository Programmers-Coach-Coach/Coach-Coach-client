import { likePost, unlikePost } from "@/api/likes.api";
import { queryClient } from "@/api/queryClient";
import { IResponseMessage } from "@/models/responseMessage.model";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useLikePost = (coachId: number) => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: (id: number) => likePost(id),
    onSuccess: () => {
      toast.success("My 목록에 추가되었습니다!");
      queryClient.invalidateQueries({ queryKey: ["getHomeData"] });
      queryClient.invalidateQueries({ queryKey: ["getCoachDetail", coachId] });
    }
  });

  return {
    mutate,
    isError
  };
};

export const useUnLikePost = (coachId: number) => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: (id: number) => unlikePost(id),
    onSuccess: () => {
      toast.success("My 목록에서 삭제되었습니다!");
      queryClient.invalidateQueries({ queryKey: ["getHomeData"] });
      queryClient.invalidateQueries({ queryKey: ["getCoachDetail", coachId] });
    }
  });

  return {
    mutate,
    isError
  };
};
