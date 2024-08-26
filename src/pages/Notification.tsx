import NotificationCard from "@/components/card/NotificationCard";
import Empty from "@/components/common/Empty/Empty";
import Loading from "@/components/loading/Loading";
import {
  useDeleteAllNotification,
  useFetchNotifications
} from "@/hooks/queries/useNotification";
import styled from "styled-components";

const Notification = () => {
  const { data, isError, isLoading } = useFetchNotifications();
  const { mutate } = useDeleteAllNotification();

  const handleDelete = () => {
    mutate();
  };

  if (isLoading) return <Loading />;
  if (isError || !data)
    return <div>알림 정보를 가져오는 중 오류가 발생했습니다.</div>;

  return (
    <NotificationStyle>
      <Button onClick={handleDelete}>전체 삭제</Button>
      <div className="contents">
        {data.length ? (
          data.map((item) => (
            <NotificationCard
              key={item.notificationId}
              noticeId={item.notificationId}
              message={item.message}
              relationFunction={item.relationFunction}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <Empty
            name="alarm"
            size="150px"
            color="gray3"
            descriptions="모든 알림을 확인하였습니다."
          />
        )}
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
