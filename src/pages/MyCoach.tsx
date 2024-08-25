import InqueryCoachProfileList from "@/components/Profile/ProfileList/InqueryCoachProflieList";
import MyCoachesProfileList from "@/components/Profile/ProfileList/MyCoachesProfileList";
import { useMyCoachList } from "@/hooks/useCoachList";
import { WhiteSpace } from "@/style/global";
import { styled } from "styled-components";

const MyCoach = () => {
  const { data, isLoading, isError } = useMyCoachList();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  return (
    <MyCoachStyle>
      <SectionStyle>
        <h2>매칭된 코치</h2>
        <WhiteSpace $height={3} />
        <p className="b2">현재 회원님과 매칭된 코치입니다.</p>
      </SectionStyle>
      <WhiteSpace $height={20} />
      <MyCoachesProfileList data={data} />
      <WhiteSpace $height={30} />
      <SectionStyle>
        <h2>문의중...</h2>
        <WhiteSpace $height={3} />
        <p className="b2">현재 회원님이 문의한 코치입니다.</p>
      </SectionStyle>
      <WhiteSpace $height={20} />
      <InqueryCoachProfileList data={data} />
    </MyCoachStyle>
  );
};

const MyCoachStyle = styled.div``;

const SectionStyle = styled.div`
  padding-top: 20px;
  padding-left: 20px;
`;

export default MyCoach;
