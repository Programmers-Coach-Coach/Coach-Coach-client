export type TNotificationType = "review" | "ask" | "like";

export interface INotification {
  notificationId: number;
  message: string;
  relationFunction: TNotificationType;
  createdAt: string;
}
