import profilePath from "@/assets/images/profile.png";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { useIsCoach } from "@/store/isCoach.store";
import { useProfileInfo } from "@/store/profileInfo.store";

interface ProfileProps {
  profileId: number;
  profileName: string;
  profileImageUrl: string | null;
  state?: "mycoaches" | "MatchingMember" | "InquiryMember";
  width: string;
  height: string;
  openModal?: () => void;
}

const Profile = ({
  profileId,
  profileName,
  profileImageUrl,
  state,
  width,
  height,
  openModal = () => {}
}: ProfileProps) => {
  const navigate = useNavigate();
  const imageUrl = profileImageUrl ? profileImageUrl : profilePath;
  const setCoachId = useProfileInfo((state) => state.setCoachId);
  const setProfileImageUrl = useProfileInfo(
    (state) => state.setProfileImageUrl
  );
  const setUserId = useProfileInfo((state) => state.setUserId);
  const setProfileName = useProfileInfo((state) => state.setProfileName);
  const setIsCoach = useIsCoach((state) => state.setIsCoach);
  const setIsModify = useIsCoach((state) => state.setIsModify);
  const setIsUser = useIsCoach((state) => state.setIsUser);

  const onClickProfile = () => {
    if (state === "mycoaches") {
      setIsCoach(false);
      setIsModify(false);
      setIsUser(false);
      setCoachId(profileId);
      setProfileImageUrl(profileImageUrl);
      navigate(`/routine/my-coach/${profileId}?coach=${profileName}`);
    } else {
      if (state === "MatchingMember") {
        setIsCoach(true);
        setIsModify(true);
        setIsUser(true);
      }
      openModal();
      setUserId(profileId);
      setProfileName(profileName);
      setProfileImageUrl(profileImageUrl);
    }
  };

  return (
    <ProfileStyle>
      {state ? (
        <>
          <ProfileImageStyle
            src={imageUrl}
            onClick={onClickProfile}
            width={width}
            height={height}
          />
        </>
      ) : (
        <ProfileImageStyle src={imageUrl} width={width} height={height} />
      )}
      {width === "80px" && <h2>{profileName}</h2>}
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImageStyle = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 8px;
  object-fit: cover;
  background: ${({ theme }) => theme.color.gray1};
  cursor: pointer;
`;

export default Profile;
