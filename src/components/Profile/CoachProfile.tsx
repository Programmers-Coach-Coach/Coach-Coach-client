import { styled } from "styled-components";
import profile from "@/assets/images/profile.png";
import Heart from "../common/InputField/CheckBox/Heart";
import { isSelectProfile } from "@/store/isSelectProfile.store";
import { useProfileInfo } from "@/store/profileInfo.store";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";

interface CoachProfileProps {
  profileName: string;
  profileImageUrl: string | null;
}

const CoachProfile = ({ profileName, profileImageUrl }: CoachProfileProps) => {
  const setIsSelectProfile = isSelectProfile(
    (state) => state.setIsSelectProfile
  );
  const setProfileName = useProfileInfo((state) => state.setProfileName);
  const setProfileImageUrl = useProfileInfo(
    (state) => state.setProfileImageUrl
  );

  const imageUrl = profileImageUrl ? profileImageUrl : profile;

  const imgClickHandler = () => {
    setIsSelectProfile(true);
    setProfileName(profileName);
    setProfileImageUrl(profileImageUrl);
  };

  const iconSize = useResponsiveIconSize("16px", "24px", 375);

  return (
    <CoachProfileStyle>
      <CoachProfileImageStyle
        src={imageUrl}
        alt="profile"
        onClick={imgClickHandler}
      />
      <CoachProfileDetailStyle>
        <CoachNameStyle>
          <p className="name">{profileName}</p>
          <Heart id={1} checked={true} size={iconSize} />
        </CoachNameStyle>
        <p className="address">서울시 마포구</p>
        <CoachTagsStyle>
          <CoachTagStyle color="primary">#헬스</CoachTagStyle>
          <CoachTagStyle color="review">#수영</CoachTagStyle>
        </CoachTagsStyle>
      </CoachProfileDetailStyle>
    </CoachProfileStyle>
  );
};

const CoachProfileStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  max-width: 600px;

  p {
    margin: 0.2vh 0;

    @media (max-width: 375px) {
      margin: 0.1vh 0;
    }
  }

  .name {
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 375px) {
      font-size: 16px;
    }
  }

  .address {
    color: #808080;
    font-size: 2vw;
    margin: 0.8vw 0 4.8vw 0;
    @media (min-width: 600px) {
      font-size: 14px;
      margin: 5px 0 30px 0;
    }
  }
`;

const CoachProfileImageStyle = styled.img`
  width: 35vw;
  height: 35vw;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  @media (min-width: 600px) {
    width: 240px;
    height: 240px;
  }
`;

const CoachProfileDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35vw;
  height: 35vw;
  padding: 0;
  margin-left: 10vw;

  @media (min-width: 600px) {
    width: 240px;
    height: 240px;
    margin-left: 30px;
  }
`;

const CoachNameStyle = styled.div`
  display: flex;
  margin: 4.8vw 0 0.8vw 0;
  @media (min-width: 600px) {
    margin: 30px 0 5px 0;
  }
`;

const CoachTagsStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const CoachTagStyle = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13vw;
  height: 6.5vw;
  font-size: 2.5vw;
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 20px;

  @media (min-width: 600px) {
    width: 80px;
    height: 40px;
    font-size: 16px;
  }
`;

export default CoachProfile;
