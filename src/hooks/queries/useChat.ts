import { getChatMessages, getCoachChats, getMemberChats } from "@/api/chat.api";
import { Chat, CoachChatRoom, MemberChatRoom } from "@/models/chat.model";
import { useQuery } from "@tanstack/react-query";

export const useGetMemberChats = () => {
  const { data, isLoading, isError } = useQuery<MemberChatRoom[]>({
    queryKey: ["getMemberChatsData"],
    queryFn: () => getMemberChats()
  });

  return {
    data,
    isLoading,
    isError
  };
};

export const useGetCoachChats = () => {
  const { data, isLoading, isError } = useQuery<CoachChatRoom[]>({
    queryKey: ["getCoachChatsData"],
    queryFn: () => getCoachChats()
  });

  return {
    data,
    isLoading,
    isError
  };
};

export const useGetChatMessages = (chatRoomId: number) => {
  const { data, isLoading, isError } = useQuery<Chat[]>({
    queryKey: ["getChatMessagesData"],
    queryFn: () => getChatMessages(chatRoomId)
  });

  return {
    data,
    isLoading,
    isError
  };
};
