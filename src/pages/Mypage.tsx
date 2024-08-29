import { useState } from "react";
import styled from "styled-components";
import CoachProfileSection from "@/components/mypage/CoachProfileSection";
import ProfileSection from "@/components/mypage/ProfileSection";
import BasicTabs from "@/components/tab/BasicTabs";
import useAuth from "@/hooks/useAuth";
import { ICheckPassword } from "@/models/auth.model";
import CheckPassword from "./CheckPassword";

const Mypage = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const { passwordCheck } = useAuth();
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  const handlePasswordCheck = async (data: ICheckPassword) => {
    const isValid = await passwordCheck(data);
    if (isValid) {
      setIsPasswordConfirmed(true); // 비밀번호 확인이 성공하면 true로 설정
    }
  };

  return (
    <>
      {isPasswordConfirmed ? (
        <Container>
          <BasicTabs value={tabValue} onTabChange={handleTabChange} />
          {tabValue === 0 ? <ProfileSection /> : <CoachProfileSection />}
        </Container>
      ) : (
        <CheckPassword onPasswordCheck={handlePasswordCheck} />
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 15px;
`;

export default Mypage;
