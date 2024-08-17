import ActionModalInner from "@/components/common/modal/contents/ActionModalInner";
import RoutineContents from "@/components/common/modal/contents/RoutineContents";
import Modal from "@/components/common/modal/Modal";
import RoutineList from "@/components/routine/RoutineList";
import useModal from "@/hooks/useModal";
import { useGetRoutines } from "@/hooks/useRoutine";
import { useState } from "react";
import { styled } from "styled-components";

const MyRoutine = () => {
  const { isModal, openModal, closeModal } = useModal();
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const { data } = useGetRoutines();
  const routines = data?.pages.flatMap((page) => page.routineList) || [];

  const onClickAdd = () => {
    openModal();
  };
  return (
    <MyRoutineStyle>
      {isModal && (
        <Modal
          closeModal={closeModal}
          overlayDisabled={isSelect}
          position="center"
        >
          <ActionModalInner schema="routine-enroll" closeModal={closeModal}>
            <RoutineContents setIsSelect={setIsSelect} />
          </ActionModalInner>
        </Modal>
      )}
      <RoutineTextStyle>
        <h1>나만의 운동 루틴</h1>
        <p className="b2" onClick={onClickAdd}>
          추가하기
        </p>
      </RoutineTextStyle>
      <RoutineList routines={routines} />
    </MyRoutineStyle>
  );
};

const MyRoutineStyle = styled.div``;

const RoutineTextStyle = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-top: 15px;
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`;

export default MyRoutine;
