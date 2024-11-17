import useModal from "@/hooks/useModal";
import styled from "styled-components";
import Modal from "../common/modal/Modal";
import ReviewInner from "../modal/ReviewInner";

interface Props {
  coachId: number;
  isMyReviewAdded: boolean;
  isMatched: boolean;
}

const AddReview = ({ coachId, isMyReviewAdded, isMatched }: Props) => {
  const { isModal, closeModal, handleModal } = useModal();

  const handleEditReview = () => {
    handleModal();
  };
  const buttonText = isMyReviewAdded
    ? "내 코치님 리뷰 수정하기"
    : "내 코치님 리뷰 작성하기";

  return (
    <>
      <AddButton
        className="review-add__button"
        onClick={handleEditReview}
        disabled={!isMatched}
      >
        {buttonText}
      </AddButton>
      {isModal && (
        <Modal position="center" closeModal={closeModal}>
          <ReviewInner
            onClose={closeModal}
            id={coachId}
            type={isMyReviewAdded ? "edit" : "enroll"}
          />
        </Modal>
      )}
    </>
  );
};

const AddButton = styled.button`
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
`;

export default AddReview;
