export interface MemberChatRoom {
  chatRoomId: number;
  coachId: number;
  coachNickname: string;
  coachProfileImageUrl: string;
  isMatching: boolean;
  coachingSports: string[];
  activeHours: string;
  lastMessage: string;
  unreadCount: number;
  lastMessageCreatedAt: string;
}

export interface CoachChatRoom {
  chatRoomId: number;
  userId: number;
  userNickname: string;
  userProfileImageUrl: string;
  isMatching: boolean;
  lastMessage: string;
  unreadCount: number;
  lastMessageCreatedAt: string;
}

enum SenderRole {
  COACH = "COACH",
  USER = "USER"
}

export interface Chat {
  senderId: number;
  senderRole: SenderRole;
  message: string;
  isRead: boolean;
  createdAt: string;
}
