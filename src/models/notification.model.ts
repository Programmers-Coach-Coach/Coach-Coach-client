export type TNotificationType = "review" | "ask" | "like" | "match";

export interface INotification {
  notificationId: number;
  message: string;
  relationFunction: TNotificationType;
  createdAt: string;
}
