import { IReview } from "@/models/coach.model";
import { timeFormat } from "@/utils/format";
import { nameMasking } from "@/utils/masking";
import styled from "styled-components";
import SvgIcon from "../Icon/SvgIcon";

interface Props {
  review: IReview;
}
const ReviewCard = ({ review }: Props) => {
  return (
    <Wrapper>
      <NameWrapper>
        <span className="name">{nameMasking(review.userName)}</span>
        <CoachRating>
          <SvgIcon name="star" fill="review" width="16px" height="16px" />
          {review.stars.toFixed(1)}
        </CoachRating>
      </NameWrapper>
      <CreatedAt className="created-at">
        {timeFormat(review.createdAt)}
      </CreatedAt>
      <ReviewText>{review.contents}</ReviewText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #111111;
  border-radius: 24px;
  padding: 20px;

  position: relative;

  .created-at {
    position: absolute;
    top: 20px;
    right: 30px;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 7px;

  .name {
    font-size: 13px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: -0.325px;
  }
`;

const CoachRating = styled.div`
  display: flex;
  gap: 2px;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.5px;
`;

const ReviewText = styled.div`
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
  padding: 0 10px;
`;

const CreatedAt = styled.div`
  font-size: 7px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.35px;
`;
export default ReviewCard;
