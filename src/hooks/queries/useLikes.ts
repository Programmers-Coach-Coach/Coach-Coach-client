import { likePost, unlikePost } from "@/api/likes.api";
import { IResponseMessage } from "@/models/responseMessage.model";
import { useMutation } from "@tanstack/react-query";

export const useLikePost = () => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: (id: number) => likePost(id),
    onSuccess: () => {}
  });

  return {
    mutate,
    isError
  };
};

export const useUnLikePost = () => {
  const { mutate, isError } = useMutation<IResponseMessage, Error, number>({
    mutationFn: (id: number) => unlikePost(id),
    onSuccess: () => {}
  });

  return {
    mutate,
    isError
  };
};
