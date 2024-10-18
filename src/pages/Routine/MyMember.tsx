import DefaultTab from "@/components/tab/DefaultTab";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import MemberProfileList from "@/components/Profile/ProfileList/MemberProfileList";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { useMatchMember } from "@/hooks/useMember";
import Loading from "@/components/loading/Loading";

const MyMember = () => {
  const { data: authData, isLoading: authLoading, refetch } = useFetchAuth();
  const [tabValue, setTabValue] = useState<number>(0);
  const [isCoach, setIsCoach] = useState(false);

  const { data = [], isLoading: memberLoading } = useMatchMember(isCoach);

  useEffect(() => {
    refetch().then(() => {
      setIsCoach(authData?.isCoach || false);
    });
  }, [authData, refetch]);

  if (authLoading || memberLoading) return <Loading />;

  const matchData = data.filter((d) => d.isMatching === true);
  const inquiryData = data.filter((d) => d.isMatching === false);

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <MyMemberStyle>
      <DefaultTab
        value={tabValue}
        labels={["내 회원", "매칭 대기 회원"]}
        onTabChange={handleTabChange}
      />
      {tabValue === 0 ? (
        <MemberProfileList data={matchData} />
      ) : (
        <MemberProfileList data={inquiryData} />
      )}
    </MyMemberStyle>
  );
};

const MyMemberStyle = styled.div``;

export default MyMember;
