import { ICoachDetail } from "@/models/coach.model";
import { styled } from "styled-components";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { Card } from "@mui/material";
import { theme } from "@/style/theme";

interface ReviewCardProps {
  coachProfile: ICoachDetail;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ coachProfile }) => {
  const renderStars = (stars: number) => {
    return Array.from({ length: stars }, () => (
      <span>
        <FaStar />
      </span>
    ));
  };

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
              <StarWrapper>{renderStars(review.stars)}</StarWrapper>
              <div>{review.userName}</div>
              <div>{review.createdAt}</div>
            </FisrstWrapper>
            <div>{review.contents}</div>
          </CardWrapper>
        </CardContainer>
      ))}
    </>
  );
};

export default ReviewCard;

const CardContainer = styled(Card)`
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
