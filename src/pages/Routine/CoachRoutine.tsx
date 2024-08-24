import Profile from "@/components/Profile/Profile";
import RoutineList from "@/components/routine/RoutineList";
import { useGetRoutines } from "@/hooks/queries/routine/useRoutine";
import { useProfileInfo } from "@/store/profileInfo.store";
import { styled } from "styled-components";

const CoachRoutine = () => {
  const coachId = useProfileInfo((state) => state.coachId);
  const profileName = useProfileInfo((state) => state.profileName);
  const profileImageUrl = useProfileInfo((state) => state.profileImageUrl);
  const { data, isLoading, isError } = useGetRoutines({ coachId });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  return (
    <CoachRoutineStyle>
      <Profile
        profileId={coachId}
        profileName={profileName}
        profileImageUrl={profileImageUrl}
        width="380px"
        height="180px"
      />
      <RoutineList routines={data} state="member to coach" />
    </CoachRoutineStyle>
  );
};

const CoachRoutineStyle = styled.div``;

export default CoachRoutine;
