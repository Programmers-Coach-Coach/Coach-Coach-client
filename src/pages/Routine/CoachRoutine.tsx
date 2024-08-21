import Profile from "@/components/Profile/Profile";
import RoutineList from "@/components/routine/RoutineList";
import { useGetRoutines } from "@/hooks/useRoutine";
import { useProfileInfo } from "@/store/profileInfo.store";
import { styled } from "styled-components";

const CoachRoutine = () => {
  const coachId = useProfileInfo((state) => state.coachId);
  const profileName = useProfileInfo((state) => state.profileName);
  const profileImageUrl = useProfileInfo((state) => state.profileImageUrl);
  const { data } = useGetRoutines({ coachId });
  const routines = data?.pages.flatMap((page) => page.routineList) || [];

  return (
    <CoachRoutineStyle>
      <Profile
        profileId={coachId}
        profileName={profileName}
        profileImageUrl={profileImageUrl}
        width="380px"
        height="180px"
      />
      <RoutineList routines={routines} />
    </CoachRoutineStyle>
  );
};

const CoachRoutineStyle = styled.div``;

export default CoachRoutine;
