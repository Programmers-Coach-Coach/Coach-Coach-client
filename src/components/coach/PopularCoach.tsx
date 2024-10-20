import profilePath from "@/assets/images/profile.png";
import top1 from "@/assets/images/topRanks/top-rank-1.svg";
import top2 from "@/assets/images/topRanks/top-rank-2.svg";
import top3 from "@/assets/images/topRanks/top-rank-3.svg";
import { IPopularCoach } from "@/models/coach.model";
import { LineClamp } from "@/style/global";
import { Sports } from "@/style/theme";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heart from "../common/InputField/CheckBox/Heart";
import SvgIcon from "../Icon/SvgIcon";

interface Props {
  coach: IPopularCoach;
  index: number;
}

const PopularCoach = ({ coach, index }: Props) => {
  const navigate = useNavigate();
  const handleLocation = (coachId: number) => {
    navigate(`/coach/${coachId}`);
  };
  const topRanks = [top1, top2, top3];

  return (
    <Wrapper
      onClick={() => {
        handleLocation(coach.coachId);
      }}
    >
      <ProfileImage>
        <img
          className="coach-image"
          src={coach.profileImageUrl || profilePath}
          alt={coach.coachName}
          loading="lazy"
        />
        <div className="top-rank">
          <img src={topRanks[index]} alt={`Top${index + 1}`} />
        </div>
        <div className="heart-section">
          <Heart checked={coach.isLiked} size="30px" id={coach.coachId} />
        </div>
      </ProfileImage>
      <CoachDetails>
        <CoachProfileHeader>
          <CoachName>{coach.coachName}</CoachName>
          <CoachRating>
            <SvgIcon name="star" fill="likes" width="16px" height="16px" />
            {coach.countOfLikes.toFixed(1)}
          </CoachRating>
        </CoachProfileHeader>
        <Seperator />
        <CoachTags>
          {coach.coachingSports.slice(0, 2).map((item) => (
            <Tag key={item.sportId} $sportId={item.sportId as Sports}>
              # {item.sportName}
            </Tag>
          ))}
        </CoachTags>
        <CoachDescription $line={3}>{coach.description}</CoachDescription>
      </CoachDetails>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ProfileImage = styled.div`
  position: relative;
  width: 161px;
  height: 161px;
  flex-shrink: 0;

  .top-rank {
    top: 0;
    left: 10px;
    position: absolute;
    width: 26px;
    height: 45px;
  }

  .coach-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .heart-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    right: 5px;
    background: #fff;
  }
`;

const CoachDetails = styled.div`
  flex-grow: 1;
`;

const CoachProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CoachName = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.4px;
`;

const CoachRating = styled.div`
  display: flex;
  gap: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.4px;
`;

const Seperator = styled.hr`
  margin-top: 6px;
  margin-bottom: 10px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  border: 0;
`;

const CoachTags = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`;

const Tag = styled.div<{ $sportId: Sports }>`
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.325px;
  padding: 4px 10px;
  border-radius: 20px;
  color: #fff;
  background: ${({ $sportId, theme }) => theme.sports[$sportId]};
`;

const CoachDescription = styled(LineClamp)`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.55px;
`;

export default PopularCoach;
