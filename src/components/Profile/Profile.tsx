import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import logo from "@/assets/images/Logo.png";

interface ProfileProps {
  profileId: number;
  profileName: string;
  profileImageUrl: string | null;
  state: "mycoaches";
  size: string;
}

const Profile = ({
  profileId,
  profileName,
  profileImageUrl,
  state,
  size
}: ProfileProps) => {
  const navigate = useNavigate();
  const imageUrl = profileImageUrl ? profileImageUrl : logo;

  const onClickProfile = () => {
    if (state === "mycoaches") {
      console.log(profileId);
      navigate(`/routine/my-coach/${profileName}`);
    }
  };

  return (
    <ProfileStyle>
      <ProfileImageStyle src={imageUrl} onClick={onClickProfile} size={size} />
      <h1>{profileName}</h1>
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImageStyle = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default Profile;
