import { INotification } from "@/models/notification.model";

export const notification: INotification[] = [
  {
    noticeId: 0,
    message: "고윤성님이 문의 메세지를 남겼습니다",
    relationFunction: "ask",
    createdAt: "2024-08-15T12:34:56Z"
  },
  {
    noticeId: 1,
    message: "새로운 리뷰가 작성되었습니다",
    relationFunction: "review",
    createdAt: "2023-08-15T12:34:56Z"
  },
  {
    noticeId: 2,
    message: "하주영님이 회원님을 관심 코치로 등록하였습니다",
    relationFunction: "like",
    createdAt: "2024-08-16T13:34:56Z"
  }
];
