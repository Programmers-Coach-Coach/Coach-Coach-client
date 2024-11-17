import { FILTER_VALUES } from "@/constants/filter";
import { useReviewList } from "@/hooks/queries/useReview";
import useModal from "@/hooks/useModal";
import { TReviewFilter } from "@/models/review.model";
import { useState } from "react";
import styled, { css } from "styled-components";
import RatingStars from "../common/Card/ReviewCard.tsx/RatingStars";
import EmptyVersion2 from "../common/Empty/EmptyVersion2";
import ReviewFilter from "../common/modal/contents/review/ReviewFilter";
import Modal from "../common/modal/Modal";
import SvgIcon from "../Icon/SvgIcon";
import Loading from "../loading/Loading";

const sortOptions: TReviewFilter[] = ["LATEST", "RATING_DESC", "RATING_ASC"];

interface Props {
  coachId: number;
}

const Review = ({ coachId }: Props) => {
  const { isModal, closeModal, handleModal } = useModal();
  const [filterId, setFilterId] = useState<number>(0);
  const {
    data: reviews,
    isLoading,
    isError
  } = useReviewList(coachId, sortOptions[filterId]);

  const handlePickFilter = (id: number) => {
    setFilterId(id);
  };

  const handleEditReview = () => {};

  if (isLoading) return <Loading />;
  if (isError || !reviews) return <Wrapper></Wrapper>;

  return (
    <Wrapper>
      <Header>
        <div className="review-rating">{reviews.reviewRating.toFixed(1)}</div>
        <div className="review-count">
          <StarWrapper>
            <RatingStars stars={reviews.reviewRating} size="20px" />
          </StarWrapper>
          <span>&nbsp;&nbsp;&nbsp;리뷰{reviews.countOfReviews}개</span>
        </div>
        <div className="review-add__button" onClick={handleEditReview}>
          내 코치님 리뷰 수정하기
        </div>
      </Header>
      <Filter onClick={handleModal} $isActive={!!isModal}>
        {FILTER_VALUES[filterId]}
        <SvgIcon name="arrow" width="10px" height="10px" stroke="#CACACA" />
      </Filter>
      {isModal && (
        <Modal closeModal={closeModal} position="footer-above">
          <ReviewFilter
            onSubmit={handlePickFilter}
            activeFilter={filterId}
            onClose={closeModal}
          />
        </Modal>
      )}
      <Contents>
        {reviews.reviews.length === 0 ? (
          <EmptyVersion2 imgName="warning" height="110px">
            코치님의
            <br />
            등록된 리뷰가 없어요
          </EmptyVersion2>
        ) : (
          <>hi</>
        )}
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 0 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  .review-rating {
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -1.5px;
  }

  .review-count {
    font-size: 10px;
    font-weight: 300;
    line-height: 15px;
    letter-spacing: -0.5px;
  }

  .review-add__button {
    font-size: 10px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.5px;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #0075ff;
    background-color: rgba(0, 117, 255, 0.4);
    margin-left: auto;
    cursor: pointer;
  }
`;

const StarWrapper = styled.div`
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  gap: 2px;
`;

const Contents = styled.div`
  background-color: #111111;
  border-radius: 24px;
  padding: 20px;
  min-height: 150px;

  padding: 36px 0;
`;

const Filter = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 19px;
  color: #cacaca;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.5px;

  ${({ $isActive }) =>
    $isActive &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `};
`;

export default Review;
