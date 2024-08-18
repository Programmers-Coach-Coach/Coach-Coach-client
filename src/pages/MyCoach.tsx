import MyCoachesProfileList from "@/components/Profile/ProfileList/MyCoachesProfileList";
import { useMyCoachList } from "@/hooks/useCoachList";
import { styled } from "styled-components";

const MyCoach = () => {
  const { data, isLoading, isError } = useMyCoachList();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  return (
    <MyCoachStyle>
      <MyCoachesProfileList data={data} />
    </MyCoachStyle>
  );
};

const MyCoachStyle = styled.div``;

export default MyCoach;
