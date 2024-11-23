import ReviewCard from "@/components/coach/review/ReviewCard.tsx";
import { IReview } from "@/models/coach.model";
import styled from "styled-components";

interface Props {
  reviews: IReview[];
}
const ReviewCardList = ({ reviews }: Props) => {
  return (
    <Wrapper>
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.reviewId} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default ReviewCardList;
