import CategoryDropdown from "@/components/common/InputField/dropdown/CategoryDropdown";
import ActionContent from "@/components/common/modal/contents/ActionContent";
import ActionModalInner from "@/components/common/modal/contents/ActionModalInner";
import CategoryContent from "@/components/common/modal/contents/CategoryContent";
import RoutinePicker from "@/components/common/modal/contents/RoutinePicker";
import Modal from "@/components/common/modal/Modal";
import useModal from "@/hooks/useModal";
import { useGetRoutine } from "@/hooks/queries/routine/useRoutine";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useModalInfo } from "@/store/modalInfo.store";
import { useIsCoach } from "@/store/isCoach.store";
import { useProfileInfo } from "@/store/profileInfo.store";

const RoutineDetail = () => {
  const { routineId } = useParams();

  const categoryModal = useModal();
  const categoryAddModal = useModal();
  const categoryModifyModal = useModal();

  const actionModal = useModal();
  const actionAddModal = useModal();
  const actionModifyModal = useModal();

  const isModify = useIsCoach((state) => state.isModify);
  const isUser = useIsCoach((state) => state.isUser);

  const userId = useProfileInfo((state) => state.userId);

  const setRoutineId = useModalInfo((state) => state.setRoutineId);

  const query = isUser ? { userId: userId } : {};

  const { data, isLoading, isError } = useGetRoutine(query, Number(routineId));

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  const onClickAdd = () => {
    setRoutineId(Number(routineId));
    categoryAddModal.openModal();
  };

  return (
    <RoutineDetailStyle>
      {categoryAddModal.isModal && (
        <Modal closeModal={categoryAddModal.closeModal} position="center">
          <ActionModalInner
            schema="category-enroll"
            closeModal={categoryAddModal.closeModal}
          >
            <CategoryContent />
          </ActionModalInner>
        </Modal>
      )}
      {categoryModifyModal.isModal && (
        <Modal closeModal={categoryModifyModal.closeModal} position="center">
          <ActionModalInner
            schema="category-modify"
            closeModal={categoryModifyModal.closeModal}
          >
            <CategoryContent />
          </ActionModalInner>
        </Modal>
      )}
      {actionAddModal.isModal && (
        <Modal closeModal={actionAddModal.closeModal} position="center">
          <ActionModalInner
            schema="action-enroll"
            closeModal={actionAddModal.closeModal}
          >
            <ActionContent />
          </ActionModalInner>
        </Modal>
      )}
      {actionModifyModal.isModal && (
        <Modal closeModal={actionModifyModal.closeModal} position="center">
          <ActionModalInner
            schema="action-modify"
            closeModal={actionModifyModal.closeModal}
          >
            <ActionContent />
          </ActionModalInner>
        </Modal>
      )}
      {categoryModal.isModal && (
        <Modal closeModal={categoryModal.closeModal} position="footer-above">
          <RoutinePicker
            schema="category"
            closeModal={categoryModal.closeModal}
            openModal={{
              categoryModify: categoryModifyModal.openModal,
              actionAdd: actionAddModal.openModal
            }}
          />
        </Modal>
      )}
      {actionModal.isModal && (
        <Modal closeModal={actionModal.closeModal} position="footer-above">
          <RoutinePicker
            schema="action"
            closeModal={actionModal.closeModal}
            openModal={{
              actionModify: actionModifyModal.openModal
            }}
          />
        </Modal>
      )}
      {isModify && (
        <TextStyle>
          <h2>운동을 완료하면 체크하세요.</h2>
          <div className="add" onClick={onClickAdd}>
            추가하기
          </div>
        </TextStyle>
      )}
      {data.categoryList.map((category) => (
        <CategoryDropdown
          key={category.categoryId}
          category={category}
          actions={category.actionList}
          modifyEnabled={isModify}
          onEditCategory={categoryModal.openModal}
          onEditAction={actionModal.openModal}
        />
      ))}
    </RoutineDetailStyle>
  );
};

const RoutineDetailStyle = styled.div`
  .add {
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.bodySize.b2.fontSize};
    line-height: ${({ theme }) => theme.bodySize.b2.lineHeight};
    font-weight: ${({ theme }) => theme.bodySize.b2.bold};
    text-decoration: underline;
  }
`;

const TextStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default RoutineDetail;
