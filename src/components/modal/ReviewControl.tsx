import { useDeleteReview } from "@/hooks/queries/useReview";
import useDropdownClick from "@/hooks/useDropdownClick";
import useModal from "@/hooks/useModal";
import styled from "styled-components";
import Modal from "../common/modal/Modal";
import Icon from "../Icon/Icon";
import IconButton from "../Icon/IconButton";
import ReviewInner from "./ReviewInner";

interface Props {
  reviewId: number;
  coachId: number;
}
const ReviewControl = ({ reviewId, coachId }: Props) => {
  const { mutate: deleteMutate } = useDeleteReview(coachId);

  const {
    isModal: isControlModal,
    handleModal: handleControlModal,
    closeModal: closeControlModal
  } = useModal();
  const {
    isModal: isEditModal,
    closeModal: closeEditModal,
    openModal: openEditModal
  } = useModal();

  const handleDelete = () => {
    deleteMutate(reviewId);
  };

  const { menuRef } = useDropdownClick(closeControlModal, false);

  return (
    <ReviewControlStyle>
      <IconButton
        name="dots"
        color="text"
        size="24px"
        onClick={handleControlModal}
      />
      {isControlModal && (
        <ControlModal ref={menuRef}>
          <Item onClick={openEditModal} className="first-child">
            <Icon size="12px" color="text" name="modify" />
            수정
          </Item>
          <Item onClick={handleDelete}>
            <Icon size="12px" color="text" name="delete" />
            삭제
          </Item>
        </ControlModal>
      )}
      {isEditModal && (
        <Modal closeModal={closeEditModal} position="center">
          <ReviewInner
            onClose={closeEditModal}
            id={reviewId}
            type="edit"
            refetchCoachId={coachId}
          />
        </Modal>
      )}
    </ReviewControlStyle>
  );
};

const ReviewControlStyle = styled.div`
  position: relative;
`;

const ControlModal = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray2};

  .first-child {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray2};
  }
`;

const Item = styled.button`
  display: flex;
  padding: 0 16px;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: 40px;
`;

export default ReviewControl;
