import Profile from "@/components/Profile/Profile";
import RoutineList from "@/components/routine/RoutineList";
import { useGetRoutines } from "@/hooks/queries/routine/useRoutine";
import { useProfileInfo } from "@/store/profileInfo.store";
import { styled } from "styled-components";

const MemberRoutine = () => {
  const userId = useProfileInfo((state) => state.userId);
  const profileName = useProfileInfo((state) => state.profileName);
  const profileImageUrl = useProfileInfo((state) => state.profileImageUrl);
  const { data, isLoading, isError } = useGetRoutines({ userId });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  return (
    <MemberRoutineStyle>
      <Profile
        profileId={userId}
        profileName={profileName}
        profileImageUrl={profileImageUrl}
        width="380px"
        height="180px"
      />
      <RoutineList routines={data} />
    </MemberRoutineStyle>
  );
};

const MemberRoutineStyle = styled.div``;

export default MemberRoutine;
