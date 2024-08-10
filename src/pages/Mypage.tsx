import CoachProfileSection from "@/components/mypage/CoachProfileSection";
import ProfileSection from "@/components/mypage/ProfileSection";
import BasicTabs from "@/components/tab/BasicTabs";
import { useState } from "react";
import styled from "styled-components";

const Mypage = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <BasicTabs value={tabValue} onTabChange={handleTabChange} />
      {tabValue === 0 ? (
        <ProfileSection />
      ) : (
        <CoachProfileSection onTabChange={handleTabChange} />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 15px;
`;

export default Mypage;
