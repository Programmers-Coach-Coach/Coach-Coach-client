import InquriyProfileList from "@/components/Profile/ProfileList/InquiryProfileList";
import MatchingProfileList from "@/components/Profile/ProfileList/MatchingProfileList";
import Loading from "@/components/loading/Loading";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { useMatchMember } from "@/hooks/useMember";
import { WhiteSpace } from "@/style/global";
import { theme } from "@/style/theme";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { BiSolidUser } from "react-icons/bi";
const ManageMember = () => {
  const { data: authData, isLoading: authLoading, refetch } = useFetchAuth();
  const [isCoach, setIsCoach] = useState(false);

  const { data = [], isLoading: memberLoading } = useMatchMember(isCoach);

  useEffect(() => {
    refetch().then(() => {
      setIsCoach(authData?.isCoach || false);
    });
  }, [authData, refetch]);

  if (authLoading || memberLoading) return <Loading />;

  return isCoach ? (
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
  ) : (
    <NoReviewSection>
      <BiSolidUser size="100" color={theme.color.gray3} />
      <ContentWrapper className="t1">코치가 아닙니다.</ContentWrapper>
    </NoReviewSection>
  );
};

const ContentWrapper = styled.h2`
  color: ${({ theme }) => theme.color.gray3};
`;

const NoReviewSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  gap: 10px;
`;

const ManageMemberStyle = styled.div`
  padding: 20px;
`;

const SectionStyle = styled.div`
  padding-top: 20px;
  padding-left: 20px;
`;

export default ManageMember;
