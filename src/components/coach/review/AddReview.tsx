import TwoButtonContent from "@/components/common/modal/contents/TwoButtonContent";
import Modal from "@/components/common/modal/Modal";
import ReviewInner from "@/components/modal/ReviewInner";
import useModal from "@/hooks/useModal";
import { ScreenStatus } from "@/pages/Coach";
import styled from "styled-components";

interface Props {
  isMyReviewAdded: boolean;
  isMatched: boolean;
  coachId: number;
  onChangeScreenStatus: (status: ScreenStatus) => void;
  reviewId: number | null;
}

const AddReview = ({
  isMyReviewAdded,
  isMatched,
  coachId,
  onChangeScreenStatus,
  reviewId
}: Props) => {
  const { isModal, closeModal, handleModal } = useModal();
  const addReviewmodal = useModal();

  const handleConfirm = () => {
    closeModal();
    addReviewmodal.openModal();
    // onChangeScreenStatus("addReview");
  };

  const handleCancel = () => {
    onChangeScreenStatus("showProfile");
    closeModal();
  };

  const buttonText = isMyReviewAdded
    ? "내 코치님 리뷰 수정하기"
    : "내 코치님 리뷰 작성하기";

  return (
    <>
      <AddButton
        className="review-add__button"
        onClick={handleModal}
        disabled={!isMatched}
      >
        {buttonText}
      </AddButton>

      {isModal && (
        <Modal position="footer-above" closeModal={closeModal}>
          <TwoButtonContent
            title="내 코치님 리뷰"
            description="리뷰를 작성하시겠어요?"
            cancelButtonText="돌아가기"
            onCancel={handleCancel}
            ConfirmButtonText="작성하기"
            onConfirm={handleConfirm}
          />
        </Modal>
      )}
      {addReviewmodal.isModal && (
        <Modal position="footer-above" closeModal={addReviewmodal.closeModal}>
          <ReviewInner
            onClose={addReviewmodal.closeModal}
            coachId={coachId}
            type={isMyReviewAdded ? "edit" : "enroll"}
            reviewId={reviewId}
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
