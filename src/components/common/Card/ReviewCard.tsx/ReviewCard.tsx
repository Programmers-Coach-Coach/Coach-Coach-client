import ReviewControl from "@/components/modal/ReviewControl";
import { ICoachDetail } from "@/models/coach.model";
import { theme } from "@/style/theme";
import { timeAgo } from "@/utils/format";
import { BsChatLeftTextFill } from "react-icons/bs";
import { styled } from "styled-components";
import RatingStars from "./RatingStars";

interface ReviewCardProps {
  coachProfile: ICoachDetail;
}

const ReviewCard = ({ coachProfile }: ReviewCardProps) => {
  return coachProfile.reviews.length === 0 ? (
    <NoReviewSection>
      <BsChatLeftTextFill size="100" color={theme.color.primary} />
      <h2>리뷰가 없습니다</h2>
    </NoReviewSection>
  ) : (
    <ReviewList>
      {coachProfile.reviews.map((review) => (
        <CardContainer key={review.reviewId}>
          <CardWrapper>
            <FisrstWrapper>
              <StarWrapper>
                <RatingStars stars={review.stars} size="12" />
              </StarWrapper>
              <div className="small-text">{review.userName}</div>
              <div className="small-text">{timeAgo(review.createdAt)}</div>
            </FisrstWrapper>
            <div className="contents">{review.contents}</div>
          </CardWrapper>
          {review.isMyReview && (
            <ReviewControl
              reviewId={review.reviewId}
              coachId={coachProfile.coachId}
            />
          )}
        </CardContainer>
      ))}
    </ReviewList>
  );
};

export default ReviewCard;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const NoReviewSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  gap: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;

  .small-text {
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray3};
  }

  .contents {
    font-size: 14px;
  }
`;

const FisrstWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StarWrapper = styled.div`
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  gap: 2px;
`;
