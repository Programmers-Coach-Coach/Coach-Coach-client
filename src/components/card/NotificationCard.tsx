import Heart from "@/assets/images/notice-heart.png";
import Match from "@/assets/images/notice-match.png";
import Message from "@/assets/images/notice-message.png";
import Speaker from "@/assets/images/notice-speaker.png";
import Warning from "@/assets/images/notice-warning.png";

import { useDeleteNotification } from "@/hooks/queries/useNotification";
import { TNotificationType } from "@/models/notification.model";
import { timeAgo } from "@/utils/format";
import styled from "styled-components";
import IconButton from "../Icon/IconButton";

interface Props {
  noticeId: number;
  relationFunction: TNotificationType;
  message: string;
  createdAt: string;
}

const NotificationCard = ({
  noticeId,
  relationFunction,
  message,
  createdAt
}: Props) => {
  const getImageSrc = () => {
    switch (relationFunction) {
      case "like":
        return Heart;
      case "review":
        return Message;
      case "match":
        return Match;
      case "refusal" || "cancel":
        return Warning;
      default:
        return Speaker;
    }
  };

  const { mutate } = useDeleteNotification();

  const handleDelete = (id: number) => {
    console.log(1);
    mutate(id);
  };

  return (
    <ReviewCardStyle>
      <img
        loading="lazy"
        className="notification-img"
        src={getImageSrc()}
        alt={relationFunction}
      />
      <div className="message">{message}</div>
      <IconButton
        name="x"
        size="18px"
        color="gray3"
        onClick={() => handleDelete(noticeId)}
        className="close-button"
      />
      <div className="timestamp">{timeAgo(createdAt)}</div>
    </ReviewCardStyle>
  );
};

const ReviewCardStyle = styled.div`
  display: flex;
  align-items: center;

  gap: 14px;
  min-height: 90px;
  padding: 0 10px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.boxShadow};

  .notification-img {
    width: 27px;
    height: 27px;
  }

  .message {
    flex: 1;
    word-break: keep-all;
  }
  .close-button {
    margin-left: auto;
  }
  .timestamp {
    position: absolute;
    bottom: 12px;
    right: 40px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray3};
  }
`;

export default NotificationCard;
