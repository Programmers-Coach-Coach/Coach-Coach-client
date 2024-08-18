import ActionModalInner from "@/components/common/modal/contents/ActionModalInner";
import RoutineContents from "@/components/common/modal/contents/RoutineContents";
import Modal from "@/components/common/modal/Modal";
import SEO from "@/components/common/SEO/SEO";
import Icon from "@/components/Icon/Icon";
import Routine from "@/components/routine/Routine";
import useModal from "@/hooks/useModal";
import { useGetRoutines } from "@/hooks/useRoutine";
import { useState } from "react";
import { styled } from "styled-components";

const MyRoutine = () => {
  const { isModal, openModal, closeModal } = useModal();
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const { data, isLoading, isError } = useGetRoutines();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  const onClickAdd = () => {
    openModal();
  };
  return (
    <MyRoutineStyle>
      <SEO
        title="코치코치-나의 루틴 페이지"
        description="나의 루틴 페이지"
        keywords="My, 루틴"
        url="/routine"
      />
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
      {data.routineList.length ? (
        data.routineList.map((item) => (
          <Routine
            key={item.routineId}
            id={item.routineId}
            name={item.routineName}
            sportId={item.sportId}
          />
        ))
      ) : (
        <div>
          <EmptyRoutineStyle>
            <Icon name="routine" size="150px" color="text" />
            <h2>운동 루틴이 없습니다.</h2>
          </EmptyRoutineStyle>
        </div>
      )}
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

const EmptyRoutineStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 280px;
  margin: 0 auto;
`;

export default MyRoutine;
