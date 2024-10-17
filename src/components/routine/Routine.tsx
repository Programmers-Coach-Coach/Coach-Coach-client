import Card from "@/components/common/Card/Card";
import Modal from "@/components/common/modal/Modal";
import useModal from "@/hooks/useModal";
import { keyframes, styled } from "styled-components";
import IconButton from "../Icon/IconButton";
import Completed from "../common/InputField/CheckBox/Completed";
import { useState } from "react";
import RoutineDetail from "./RoutineDetail";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import TwoButtonContent from "../common/modal/contents/TwoButtonContent";

interface RoutineProps {
  id: number;
  name: string;
  isCheck: boolean;
  isModify: boolean;
}

const ACTION = [
  {
    name: "렛풀다운",
    count: "20회",
    sets: "4세트"
  },
  {
    name: "시티드 케이블 로우",
    count: "20회",
    sets: "4세트"
  },
  {
    name: "비하인드 넥 풀 다운",
    count: "20회",
    sets: "4세트"
  }
];

const Routine = ({ id, name, isCheck, isModify }: RoutineProps) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const deleteModal = useModal();

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const routineDeleteHandler = () => {
    alert(id);
  };

  const iconSize = useResponsiveIconSize("15px", "20px", 375);

  return (
    <>
      {deleteModal.isModal && (
        <Modal closeModal={deleteModal.closeModal} position="footer-above">
          <TwoButtonContent
            title={name}
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
            {isCheck && <Completed isCompleted={true} categoryId={1} />}
            <h2>{name}</h2>
            <h2 className="sport">|</h2>
            <h2 className="sport">헬스</h2>
            <IconButton
              name="arrowDown"
              color="text"
              size={iconSize}
              className="arrow-button"
              onClick={onClickToggle}
            />
          </RoutineTitleStyle>
          {isModify && (
            <CRUDIconStyle>
              <IconButton name="modify" size={iconSize} color="text" />
              <IconButton
                name="delete"
                size={iconSize}
                color="text"
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
            {ACTION.map((action) => (
              <RoutineDetail
                key={action.name}
                name={action.name}
                count={action.count}
                sets={action.sets}
              />
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
