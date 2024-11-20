export type TNotificationType =
  | "review"
  | "ask"
  | "like"
  | "match"
  | "refusal"
  | "cancel";

export interface INotification {
  notificationId: number;
  nickname: string;
  profileImageUrl: string;
  message: string;
  relationFunction: TNotificationType;
  createdAt: string;
}
