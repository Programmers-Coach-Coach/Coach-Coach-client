import NotificationCard from "@/components/card/NotificationCard";
import EmptyVersion2 from "@/components/common/Empty/EmptyVersion2";
import Loading from "@/components/loading/Loading";
import {
  useDeleteAllNotification,
  useFetchNotifications
} from "@/hooks/queries/useNotification";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const Notification = () => {
  const { data, isError, isLoading } = useFetchNotifications();
  const { mutate } = useDeleteAllNotification();

  const handleDelete = () => {
    mutate();
  };

  if (isLoading) return <Loading />;
  if (isError || !data)
    return (
      <EmptyVersion2 imgName="notification" height="500px">
        알림 정보를 가져오는 중
        <br />
        오류가 발생했어요
      </EmptyVersion2>
    );

  return (
    <NotificationStyle>
      <Button onClick={handleDelete}>모두 읽기</Button>
      <div className="contents">
        {data.length ? (
          data.map((item) => (
            <NotificationCard
              key={item.notificationId}
              noticeId={item.notificationId}
              nickname={item.nickname}
              profileImageUrl={item.profileImageUrl}
              message={item.message}
              relationFunction={item.relationFunction}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <EmptyVersion2 imgName="notification" height="600px">
            알림이
            <br />
            아직없어요
          </EmptyVersion2>
        )}
      </div>
      <WhiteSpace $height={60} />
    </NotificationStyle>
  );
};

const NotificationStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .contents {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Button = styled.button`
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  margin-left: auto;
  margin-top: 15px;
`;

export default Notification;
