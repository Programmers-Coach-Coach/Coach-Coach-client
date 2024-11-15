import useModal from "@/hooks/useModal";
import { useState } from "react";
import styled, { css } from "styled-components";
import RatingStars from "../common/Card/ReviewCard.tsx/RatingStars";
import ReviewFilter, {
  FILTER_VALUES
} from "../common/modal/contents/review/ReviewFilter";
import Modal from "../common/modal/Modal";
import SvgIcon from "../Icon/SvgIcon";

const Review = () => {
  const rating = 5.0;
  const { isModal, closeModal, handleModal } = useModal();
  const [filterId, setFilterId] = useState<number>(0);

  const handlePickFilter = (id: number) => {
    setFilterId(id);
  };

  const handleEditReview = () => {};

  return (
    <Wrapper>
      <Header>
        <div className="review-rating">{rating.toFixed(1)}</div>
        <div className="review-count">
          <StarWrapper>
            <RatingStars stars={5} size="20px" />
          </StarWrapper>
          <span>&nbsp;&nbsp;&nbsp;리뷰{4321}개</span>
        </div>
        <div className="review-add__button" onClick={handleEditReview}>
          내 코치님 리뷰 수정하기
        </div>
      </Header>
      <Contents>
        <Filter
          className="review__filter"
          onClick={handleModal}
          $isActive={!!isModal}
        >
          {FILTER_VALUES[filterId]}
          <SvgIcon name="arrow" width="10px" height="10px" stroke="#CACACA" />
        </Filter>
        {isModal && (
          <Modal closeModal={closeModal} position="footer-above">
            <ReviewFilter
              onPick={handlePickFilter}
              activeFilter={filterId}
              onClose={closeModal}
            />
          </Modal>
        )}
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #111111;
  border-radius: 24px;
  padding: 20px;
  min-height: 330px;
`;

const Header = styled.div`
  display: flex;
  gap: 8px;
  padding: 20px 0 20px 20px;
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
  position: relative;
  padding: 36px 0;

  .review__filter {
    position: absolute;
    top: 10px;
    right: 19px;
  }
`;

const Filter = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
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
