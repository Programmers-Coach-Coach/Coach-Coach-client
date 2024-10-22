import Card from "@/components/common/Card/Card";
import Modal from "@/components/common/modal/Modal";
import useModal from "@/hooks/useModal";
import { keyframes, styled } from "styled-components";
import Completed from "../common/InputField/CheckBox/Completed";
import { useState } from "react";
import RoutineDetail from "./RoutineDetail";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import TwoButtonContent from "../common/modal/contents/TwoButtonContent";
import SvgIcon from "../Icon/SvgIcon";
import { IGetRoutine } from "@/models/routine.model";

interface RoutineProps {
  routine: IGetRoutine;
  isCheck: boolean;
  isModify: boolean;
}

const Routine = ({ routine, isCheck, isModify }: RoutineProps) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const deleteModal = useModal();

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const routineDeleteHandler = () => {
    alert(routine.routineId);
  };

  const iconSize = useResponsiveIconSize("15px", "20px", 375);

  return (
    <>
      {deleteModal.isModal && (
        <Modal closeModal={deleteModal.closeModal} position="footer-above">
          <TwoButtonContent
            title={routine.routineName}
            description="루틴을 삭제하시겠어요?"
            cancelButtonText="돌아가기"
            onCancel={() => {
              deleteModal.closeModal();
            }}
            ConfirmButtonText="삭제하기"
            onConfirm={routineDeleteHandler}
          />
        </Modal>
      )}
      <Card>
        <RoutineStyle>
          <RoutineTitleStyle $isCheck={isCheck} $isToggleOpen={isToggleOpen}>
            {isCheck && <Completed isCompleted={routine.isCompleted} />}
            <h2>{routine.routineName}</h2>
            <h2 className="sport">|</h2>
            <h2 className="sport">{routine.sportName}</h2>
            <SvgIcon
              name="arrow"
              width={iconSize}
              height={iconSize}
              fill="text"
              onClick={onClickToggle}
              className="arrow-button"
            />
          </RoutineTitleStyle>
          {isModify && (
            <CRUDIconStyle>
              <SvgIcon
                name="modify"
                width={iconSize}
                height={iconSize}
                fill="text"
              />
              <SvgIcon
                name="delete"
                width={iconSize}
                height={iconSize}
                fill="text"
                onClick={() => {
                  deleteModal.openModal();
                }}
              />
            </CRUDIconStyle>
          )}
        </RoutineStyle>
        {isToggleOpen && (
          <RoutineDetailStyle $isToggleOpen={isToggleOpen}>
            <Underline />
            {routine.actions.map((action) => (
              <RoutineDetail key={action.actionId} action={action} />
            ))}
          </RoutineDetailStyle>
        )}
      </Card>
    </>
  );
};

const RoutineStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RoutineTitleStyle = styled.div<{
  $isCheck: boolean;
  $isToggleOpen: boolean;
}>`
  display: flex;
  justify-content: center;

  h2 {
    margin-left: ${({ $isCheck }) => ($isCheck ? "2px" : "20px")};

    @media (max-width: 375px) {
      font-size: 12px;
    }
  }

  svg {
    margin-left: 10px;
  }

  .sport {
    color: #9b9b9b;
    margin-left: 10px;
  }

  .arrow-button {
    transform: rotateX(
      ${({ $isToggleOpen }) => ($isToggleOpen ? "180deg" : "0")}
    );
    transition: transform 0.3s ease-in-out;
  }
`;

const CRUDIconStyle = styled.div`
  display: flex;
  margin-right: 10px;

  svg {
    margin-right: 10px;
  }
`;

const RoutineDetailStyle = styled.ul<{ $isToggleOpen: boolean }>`
  overflow: hidden;
  animation: ${({ $isToggleOpen }) => ($isToggleOpen ? slideDown : slideUp)}
    0.3s ease-in-out forwards;
`;

const slideDown = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1000px;
  }
`;

const slideUp = keyframes`
  0% {
    max-height: 1000px;
  }
  100% {
    max-height: 0;
  }
`;

const Underline = styled.div`
  display: inline-block;
  padding: 0;
  margin: 1.5vh 20px 1vh 20px;
  width: calc(100% - 40px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
`;

export default Routine;
