import { useState } from "react";
import DraggableIcon from "@/components/Icon/DraggableIcon";
import IconButton from "@/components/Icon/IconButton";
import RoutineList from "@/components/routine/RoutineList";
import { useGetRoutines } from "@/hooks/queries/routine/useRoutine";
import { WhiteSpace } from "@/style/global";
import { formatCurrentDate } from "@/utils/formatDate";
import { styled } from "styled-components";
import AddModal from "@/components/common/modal/AddModal";
import Progress from "@/components/common/InputField/Progress/Progress";

const MyRoutine = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false); // 드래그 상태 추가
  const { data, isLoading, isError } = useGetRoutines();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  const currentDate = formatCurrentDate();

  // 드래그 중이 아닐 때만 openHandler 실행
  const openHandler = () => {
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {isOpen && <BlurStyle />}
      <RoutineStyle>
        <RoutineTextStyle>
          <h1>오늘의 루틴</h1>
          <p className="b3">{currentDate}</p>
        </RoutineTextStyle>
        <Progress value={70} />
        <RoutineList routines={data} />
        <WhiteSpace $height={80} />
        <DraggableIcon isDraggingFn={setIsDragging}>
          {isOpen ? (
            <AddModal openHandler={openHandler} />
          ) : (
            <IconButton
              name="add"
              size="60px"
              color="primary"
              onClick={openHandler}
            />
          )}
        </DraggableIcon>
      </RoutineStyle>
    </>
  );
};

const BlurStyle = styled.div`
  position: fixed;
  inset: 0;
  align-items: center;
  max-width: 100vw;
  height: 100vh;
  background: rgba(24, 26, 32, 0.7);
  backdrop-filter: blur(1px);
  z-index: 1002;
`;

const RoutineStyle = styled.div`
  margin-top: 1vh;
`;

const RoutineTextStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.color.primary};
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export default MyRoutine;
