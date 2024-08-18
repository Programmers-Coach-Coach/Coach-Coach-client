import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import logo from "@/assets/images/Logo.png";
import { useProfileInfo } from "@/store/profileInfo.store";

interface ProfileProps {
  profileId: number;
  profileName?: string;
  profileImageUrl: string | null;
  state?: "mycoaches";
  width: string;
  height: string;
}

const Profile = ({
  profileId,
  profileName,
  profileImageUrl,
  state,
  width,
  height
}: ProfileProps) => {
  const navigate = useNavigate();
  const imageUrl = profileImageUrl ? profileImageUrl : logo;
  const setCoachId = useProfileInfo((state) => state.setCoachId);
  const setProfileImageUrl = useProfileInfo(
    (state) => state.setProfileImageUrl
  );

  const onClickProfile = () => {
    if (state === "mycoaches") {
      setCoachId(profileId);
      setProfileImageUrl(profileImageUrl);
      navigate(`/routine/my-coach/${profileId}?coach=${profileName}`);
    }
  };

  return (
    <ProfileStyle>
      <ProfileImageStyle
        src={imageUrl}
        onClick={onClickProfile}
        width={width}
        height={height}
      />
      {profileName && <h1>{profileName}</h1>}
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
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default Profile;
