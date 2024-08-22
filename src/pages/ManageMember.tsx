import InquriyProfileList from "@/components/Profile/ProfileList/InquiryProfileList";
import MatchingProfileList from "@/components/Profile/ProfileList/MatchingProfileList";
import { useMatchMember } from "@/hooks/useMember";
import { WhiteSpace } from "@/style/global";
import { styled } from "styled-components";

const ManageMember = () => {
  const { data, isLoading, isError } = useMatchMember();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  return (
    <ManageMemberStyle>
      <SectionStyle>
        <h2>내 회원</h2>
        <WhiteSpace $height={3} />
        <p className="b2">사진을 클릭하여 회원님의 운동 루틴을 작성해보세요.</p>
      </SectionStyle>
      <WhiteSpace $height={20} />
      <MatchingProfileList data={data} />
      <WhiteSpace $height={30} />
      <SectionStyle>
        <h2>문의 회원</h2>
        <WhiteSpace $height={3} />
        <p className="b2">회원님에게 문의한 회원들의 리스트입니다.</p>
        <p className="b2">클릭하여 회원 추가 또는 삭제가 가능합니다.</p>
      </SectionStyle>
      <WhiteSpace $height={20} />
      <InquriyProfileList data={data} />
    </ManageMemberStyle>
  );
};

const ManageMemberStyle = styled.div``;

const SectionStyle = styled.div`
  padding-top: 20px;
  padding-left: 20px;
`;

export default ManageMember;
