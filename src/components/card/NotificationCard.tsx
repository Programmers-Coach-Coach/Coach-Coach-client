import Heart from "@/assets/images/notice-heart.png";
import Match from "@/assets/images/notice-match.png";
import Message from "@/assets/images/notice-message.png";
import Speaker from "@/assets/images/notice-speaker.png";
import Warning from "@/assets/images/notice-warning.png";

import { useDeleteNotification } from "@/hooks/queries/useNotification";
import { TNotificationType } from "@/models/notification.model";
import { timeAgo } from "@/utils/format";
import styled from "styled-components";
import SvgIcon from "../Icon/SvgIcon";

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
      case "refusal":
      case "cancel":
        return Warning;
      default:
        return Speaker;
    }
  };

  const { mutate } = useDeleteNotification();

  const handleDelete = (id: number) => {
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
      <Main>
        <div className="name-wrapper">
          {/* <div className="name"></div> */}
          <div className="timestamp">· {timeAgo(createdAt)}</div>
        </div>
        <div className="message">{message}</div>
      </Main>
      <SvgIcon
        name="x"
        width="20px"
        height="20px"
        stroke="#767676"
        onClick={() => handleDelete(noticeId)}
        className="close-button"
      />
    </ReviewCardStyle>
  );
};

const ReviewCardStyle = styled.div`
  display: flex;
  align-items: center;

  gap: 14px;
  min-height: 90px;
  padding: 33px 0;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  position: relative;

  .notification-img {
    width: 49px;
    height: 49px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .message {
    flex: 1;
    font-size: 13px;
    font-weight: 200;
    line-height: 19px;
    letter-spacing: -0.65px;
    word-break: keep-all;
  }

  .timestamp {
    font-size: 10px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.color.gray3};
  }
`;

export default NotificationCard;
