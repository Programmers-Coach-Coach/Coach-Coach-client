export type TNotificationType =
  | "review"
  | "ask"
  | "like"
  | "match"
  | "refusal"
  | "cancel";

export interface INotification {
  notificationId: number;
  message: string;
  relationFunction: TNotificationType;
  createdAt: string;
}
