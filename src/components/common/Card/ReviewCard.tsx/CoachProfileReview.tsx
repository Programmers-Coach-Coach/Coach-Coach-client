import { ICoachDetail } from "@/models/coach.model";
import { theme } from "@/style/theme";
import { formatDate } from "@/utils/formatDate";
import { BsChatLeftTextFill } from "react-icons/bs";
import { styled } from "styled-components";
import RatingStars from "./RatingStars";

interface ReviewCardProps {
  coachProfile: ICoachDetail;
}

const CoachProfileReview = ({ coachProfile }: ReviewCardProps) => {
  return coachProfile.reviews.length === 0 ? (
    <NoReviewSection>
      <BsChatLeftTextFill size="100" color={theme.color.primary} />
      <h2>리뷰가 없습니다</h2>
    </NoReviewSection>
  ) : (
    <>
      {coachProfile.reviews.map((review, index) => (
        <CardContainer key={index}>
          <CardWrapper>
            <FisrstWrapper>
              <StarWrapper>
                <RatingStars stars={review.stars} />
              </StarWrapper>
              <div className="small-text">{review.userName}</div>
              <div className="small-text">{formatDate(review.createdAt)}</div>
            </FisrstWrapper>
            <div className="contents">{review.contents}</div>
          </CardWrapper>
        </CardContainer>
      ))}
    </>
  );
};

export default CoachProfileReview;

const CardContainer = styled.div`
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
  overflow-wrap: break-word;
  .small-text {
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray3};
  }

  .contents {
    font-size: 14px;
  }
`;

const FisrstWrapper = styled.div`
  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StarWrapper = styled.div`
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  gap: 2px;
`;
