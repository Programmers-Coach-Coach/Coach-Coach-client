import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import profile from "@/assets/images/profile.png";
import { IGetMyCoach } from "@/models/coach.model";
import { isSelectProfile } from "@/store/isSelectProfile.store";
import { useProfileInfo } from "@/store/profileInfo.store";
import { Sports } from "@/style/theme";
import { styled } from "styled-components";
import Heart from "../common/InputField/CheckBox/Heart";

interface CoachProfileProps {
  coach: IGetMyCoach;
}

const CoachProfile = ({ coach }: CoachProfileProps) => {
  const setIsSelectProfile = isSelectProfile(
    (state) => state.setIsSelectProfile
  );
  const setCoachId = useProfileInfo((state) => state.setCoachId);
  const setProfileName = useProfileInfo((state) => state.setProfileName);
  const setProfileImageUrl = useProfileInfo(
    (state) => state.setProfileImageUrl
  );

  const imageUrl = coach.profileImageUrl ? coach.profileImageUrl : profile;

  const imgClickHandler = () => {
    if (coach.isMatching !== false) {
      setIsSelectProfile(true);
      setCoachId(coach.coachId);
      setProfileName(coach.coachName);
      setProfileImageUrl(coach.profileImageUrl);
    }
  };

  const iconSize = useResponsiveIconSize("16px", "20px", 375);

  return (
    <CoachProfileStyle>
      <CoachProfileContainer
        onClick={imgClickHandler}
        isInquiry={coach.isMatching === false}
      >
        <CoachProfileImageStyle src={imageUrl} alt="profile" />
        {coach.isMatching === false && (
          <>
            <Overlay />
            <OverlayText>매칭 대기중</OverlayText>
          </>
        )}
      </CoachProfileContainer>
      <CoachProfileDetailStyle>
        <CoachNameStyle>
          <p className="name">{coach.coachName}</p>
          <div className="heart-section">
            <Heart checked={coach.isLiked} size={iconSize} id={coach.coachId} />
          </div>
        </CoachNameStyle>
        <p className="address">{coach.localAddress}</p>
        <CoachTagsStyle>
          {coach.coachingSports?.map((sport) => {
            return (
              <CoachTagStyle key={sport.sportId} $id={sport.sportId as Sports}>
                # {sport.sportName}
              </CoachTagStyle>
            );
          })}
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

  .heart-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #d9d9d9;

    svg {
      transform: translateY(1px);
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

const CoachProfileContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isInquiry"
})<{ isInquiry: boolean }>`
  position: relative;
  width: 35vw;
  height: 35vw;
  cursor: ${({ isInquiry }) => (isInquiry ? "default" : "pointer")};

  @media (min-width: 600px) {
    width: 240px;
    height: 240px;
  }
`;

const CoachProfileImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #0075ff;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  pointer-events: none;
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
  align-items: center;
  gap: 5px;
  margin: 4.8vw 0 0.8vw 0;
  @media (min-width: 600px) {
    margin: 30px 0 5px 0;
  }
`;

const CoachTagsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const CoachTagStyle = styled.div<{ $id: Sports }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13vw;
  height: 6.5vw;
  font-size: 2.5vw;
  background-color: ${({ theme, $id }) => theme.sports[$id]};
  border-radius: 20px;

  @media (min-width: 600px) {
    width: 80px;
    height: 40px;
    font-size: 16px;
  }
`;

export default CoachProfile;
