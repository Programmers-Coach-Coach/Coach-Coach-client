import { INotification } from "@/models/notification.model";

export const notification: INotification[] = [
  {
    noticeId: 0,
    message: "고윤성님이 문의 메세지를 남겼습니다",
    relationFunction: "ask",
    createdAt: "2024.01.01"
  },
  {
    noticeId: 1,
    message: "새로운 리뷰가 작성되었습니다",
    relationFunction: "review",
    createdAt: "1일 전"
  },
  {
    noticeId: 2,
    message: "하주영님이 회원님을 관심 코치로 등록하였습니다",
    relationFunction: "like",
    createdAt: "30분 전"
  }
];
