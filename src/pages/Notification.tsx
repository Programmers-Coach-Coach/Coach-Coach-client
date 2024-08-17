import NotificationCard from "@/components/card/NotificationCard";
import { notification } from "@/data/notification";
import styled from "styled-components";

const Notification = () => {
  const handleDelete = () => {
    // TODO: 알림 전체 삭제
  };
  return (
    <NotificationStyle>
      <Button onClick={handleDelete}>전체 삭제</Button>
      <div className="contents">
        {notification.map((item) => (
          <NotificationCard
            key={item.noticeId}
            noticeId={item.noticeId}
            message={item.message}
            relationFunction={item.relationFunction}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </NotificationStyle>
  );
};

const NotificationStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 80px;

  .contents {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

const Button = styled.button`
  color: ${({ theme }) => theme.color.gray3};
  display: flex;
  margin-left: auto;
`;
export default Notification;
