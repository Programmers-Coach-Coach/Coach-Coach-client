import { API_PATH } from "@/constants/apiPath";
import { requestHandler } from "./http";
import { Chat, CoachChatRoom, MemberChatRoom } from "@/models/chat.model";

export const getMemberChats = async () => {
  return await requestHandler<MemberChatRoom[]>("get", API_PATH.memberChat);
};

export const getCoachChats = async () => {
  return await requestHandler<CoachChatRoom[]>("get", API_PATH.coachChat);
};

export const getChatMessages = async (chatRoomId: number) => {
  return await requestHandler<Chat[]>(
    "get",
    `v1/chat-rooms/${chatRoomId}/messages`
  );
};
