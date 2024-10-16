import CoachProfileSection from "@/components/mypage/CoachProfileSection";
import ProfileSection from "@/components/mypage/ProfileSection";
import DefaultTab from "@/components/tab/DefaultTab";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import styled from "styled-components";
import CheckPassword from "./CheckPassword";
import { ICheckPassword } from "@/models/auth.model";

const Profile = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
  const { passwordCheck } = useAuth();

  const handlePasswordCheck = async (data: ICheckPassword) => {
    const isValid = await passwordCheck(data);
    if (isValid) {
      setIsPasswordConfirmed(true); // 비밀번호 확인이 성공하면 true로 설정
    }
  };
  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div>
      {isPasswordConfirmed ? (
        <Container>
          <DefaultTab
            value={tabValue}
            labels={["내 프로필", "내 코치 프로필"]}
            onTabChange={handleTabChange}
          />
          {tabValue === 0 ? <ProfileSection /> : <CoachProfileSection />}
        </Container>
      ) : (
        <CheckPassword onPasswordCheck={handlePasswordCheck} />
      )}
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 15px;
`;

export default Profile;
