import profilePath from "@/assets/images/profile.png";
import { ICoach } from "@/models/coach.model";
import { LineClamp } from "@/style/global";
import { Sports } from "@/style/theme";
import { getImgixUrl } from "@/utils/imgix";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SportChip from "../../common/Chip/SportChip";
import Heart from "../../common/InputField/CheckBox/Heart";
import SvgIcon from "../../Icon/SvgIcon";

interface Props {
  coach: ICoach;
}
const Coach = ({ coach }: Props) => {
  const navigate = useNavigate();

  const profileImageUrl = coach.profileImageUrl
    ? getImgixUrl(coach.profileImageUrl, {
        w: 84,
        h: 84,
        dpr: window.devicePixelRatio > 1 ? 2 : 1,
        auth: "format"
      })
    : profilePath;

  return (
    <Wrapper onClick={() => navigate(`/coach/${coach.coachId}`)}>
      <Image src={profileImageUrl} alt={coach.coachName} />
      <InfoSection>
        <Top>
          <span className="name__info">{coach.coachName}</span>
          <span className="review__info">
            <SvgIcon name="star" fill="#FFC700" width="12px" height="12px" />
            {coach.reviewRating.toFixed(1)} ({coach.countOfReviews})
          </span>
          <span className="address__info">{coach.localAddress}</span>
        </Top>
        <Middle>
          <span className="coaching-sports__info">
            {coach.coachingSports.slice(0, 2).map((sport) => (
              <SportChip
                key={sport.sportId}
                sportId={sport.sportId as Sports}
                sportName={sport.sportName}
                size="small"
              />
            ))}
            {coach.coachingSports.length > 2 && (
              <span className="etc-sports__info">
                외 {coach.coachingSports.length - 2}개
              </span>
            )}
          </span>
          <Heart checked={coach.isLiked} size="24" id={coach.coachId} />
        </Middle>
        <Bottom>
          <LineClamp $line={1} className="description__info">
            {coach.coachIntroduction}
          </LineClamp>
        </Bottom>
      </InfoSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  padding: 18px;
  position: relative;
  cursor: pointer;
  background-color: #252932;
  border-radius: 24px;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 87px;
  height: 87px;
  border-radius: 50%;
  object-fit: cover;
  background: ${({ theme }) => theme.color.gray1};
`;

const InfoSection = styled.div`
  overflow: hidden;
  flex: 1;
  height: 100%;
  padding: 4px;
`;

const Top = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  .name__info {
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.375px;
  }

  .review__info {
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.25px;

    display: flex;
    align-items: center;
    gap: 2px;
  }

  .address__info {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.325px;
    margin-left: auto;
  }
`;

const Middle = styled.div`
  display: flex;
  align-items: center;

  .coaching-sports__info {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: auto;
  }

  .etc-sports__info {
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.25px;
    margin-bottom: 3px;
  }
`;
const Bottom = styled.div`
  overflow: hidden;

  .description__info {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.325px;
    color: #808080;
  }
`;

export default Coach;
