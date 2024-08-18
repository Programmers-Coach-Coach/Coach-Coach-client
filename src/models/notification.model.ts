export type TNotificationType = "review" | "ask" | "like";

export interface INotification {
  noticeId: number;
  message: string;
  relationFunction: TNotificationType;
  createdAt: string;
}
