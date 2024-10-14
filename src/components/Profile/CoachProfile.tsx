import { styled } from "styled-components";
import profile from "@/assets/images/profile.png";
import Heart from "../common/InputField/CheckBox/Heart";
import { isSelectProfile } from "@/store/isSelectProfile";
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
          <CoachTagStyle color="primary">
            <p className="tag">#헬스</p>
          </CoachTagStyle>
          <CoachTagStyle color="review">
            <p className="tag">#수영</p>
          </CoachTagStyle>
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
    font-size: 14px;
    color: #808080;

    @media (max-width: 375px) {
      font-size: 10px;
    }
  }

  .tag {
    font-size: 16px;

    @media (max-width: 375px) {
      font-size: 12px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
`;

const CoachTagsStyle = styled.div`
  display: flex;
  margin-top: 1vw;
`;

const CoachTagStyle = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 20px;
  margin: 0 5px;

  @media (max-width: 375px) {
    width: 50px;
    height: 30px;
  }
`;

export default CoachProfile;
