import profile from "@/assets/images/profile.png";
import { useDeleteNotification } from "@/hooks/queries/useNotification";
import { TNotificationType } from "@/models/notification.model";
import { timeAgo } from "@/utils/format";
import styled from "styled-components";
import SvgIcon from "../Icon/SvgIcon";

interface Props {
  noticeId: number;
  nickname: string;
  relationFunction: TNotificationType;
  profileImageUrl: string;
  message: string;
  createdAt: string;
}

const NotificationCard = ({
  noticeId,
  relationFunction,
  message,
  createdAt,
  nickname,
  profileImageUrl
}: Props) => {
  const { mutate } = useDeleteNotification();

  const handleDelete = (id: number) => {
    mutate(id);
  };

  const formattedMessage = message.replace(/([!.])\s*/g, "$1\n");
  return (
    <ReviewCardStyle>
      <img
        loading="lazy"
        className="notification-img"
        src={profileImageUrl ?? profile}
        alt={relationFunction}
      />
      <Main>
        <div className="name-wrapper">
          <div className="name">{nickname}</div>&nbsp;
          <div className="timestamp">· {timeAgo(createdAt)}</div>
        </div>
        <div className="message">{formattedMessage}</div>
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
    width: 50px;
    height: 50px;
    background-color: #878787;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .name-wrapper {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .message {
    flex: 1;
    font-size: 13px;
    font-weight: 200;
    line-height: 19px;
    letter-spacing: -0.65px;
    white-space: pre-line;
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
