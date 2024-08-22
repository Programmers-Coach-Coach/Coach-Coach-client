import Profile from "@/components/Profile/Profile";
import RoutineList from "@/components/routine/RoutineList";
import { useGetRoutines } from "@/hooks/useRoutine";
import { useProfileInfo } from "@/store/profileInfo.store";
import { styled } from "styled-components";

const MemberRoutine = () => {
  const userId = useProfileInfo((state) => state.userId);
  const profileName = useProfileInfo((state) => state.profileName);
  const profileImageUrl = useProfileInfo((state) => state.profileImageUrl);
  const { data } = useGetRoutines({ userId });
  const routines = data?.pages.flatMap((page) => page.routineList) || [];

  return (
    <MemberRoutineStyle>
      <Profile
        profileId={userId}
        profileName={profileName}
        profileImageUrl={profileImageUrl}
        width="380px"
        height="180px"
      />
      <RoutineList routines={routines} />
    </MemberRoutineStyle>
  );
};

const MemberRoutineStyle = styled.div``;

export default MemberRoutine;
