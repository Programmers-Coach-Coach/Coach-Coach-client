import profilePath from "@/assets/images/profile.png";
import { ICoachDetail } from "@/models/coach.model";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import Heart from "../common/InputField/CheckBox/Heart";
import { Local } from "./Coach";

interface Props {
  coach: ICoachDetail;
}
const BasicInfo = ({ coach }: Props) => {
  return (
    <Wrapper>
      <Image src={coach.profileImageUrl || profilePath} alt={coach.coachName} />
      <CoachInfo>
        <div>
          <p className="coach-name">{coach.coachName}</p>
          <Icons>
            <IconWrapper>
              <Icon name="fullStar" size="16px" color="review" />
              {coach.reviewRating} ({coach.countOfReviews})
            </IconWrapper>
            <IconWrapper>
              <Icon name="heart" size="16px" color="review" />(
              {coach.countOfLikes})
            </IconWrapper>
          </Icons>
        </div>
        <ActiveHours>문의 가능 시간: {coach.activeHours}</ActiveHours>
      </CoachInfo>
      <HeartWrapper>
        <Heart checked={coach.isLiked} size="24px" id={coach.coachId} />
      </HeartWrapper>
      <Local>{coach.localAddress}</Local>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
`;

const CoachInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .coach-name {
    font-size: 20px;
    font-weight: 600;
    line-height: 36px;
  }
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  object-fit: cover;
  background: ${({ theme }) => theme.color.gray1};

  @media only screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

const ActiveHours = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray3};
`;

const HeartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default BasicInfo;
