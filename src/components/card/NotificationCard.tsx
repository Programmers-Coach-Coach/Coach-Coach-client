import Heart from "@/assets/images/notice-heart.png";
import Message from "@/assets/images/notice-message.png";
import Speaker from "@/assets/images/notice-speaker.png";

import { TNotificationType } from "@/models/notification.model";
import styled from "styled-components";
import Icon from "../Icon/Icon";

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
      case "review":
        return Message;
      case "ask":
        return Speaker;
      default:
        return Heart;
    }
  };

  const handleDelete = (id: number) => {
    // TODO: 알림 개별 삭제
  };

  return (
    <ReviewCardStyle>
      <img src={getImageSrc()} alt={relationFunction} />
      <div className="message">{message}</div>
      <button
        onClick={() => {
          handleDelete(noticeId);
        }}
        className="close-button"
      >
        <Icon name="x" size="18px" color="gray3" />
      </button>
      <div className="timestamp">{createdAt}</div>
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
