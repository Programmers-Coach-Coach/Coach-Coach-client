import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import { ICompletedRoutine } from "@/models/record.model";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import SvgIcon from "../Icon/SvgIcon";
import Card from "../common/Card/Card";
import RoutineDetail from "./RoutineDetail";

interface Props {
  routine: ICompletedRoutine;
}
const RecordRoutine = ({ routine }: Props) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const iconSize = useResponsiveIconSize("15px", "20px", 375);

  return (
    <Card>
      <RoutineStyle>
        <RoutineTitleStyle $isCheck={true} $isToggleOpen={isToggleOpen}>
          <h2>{routine.routineName}</h2>
          <h2 className="sport">|</h2>
          <h2 className="sport">{routine.sportName}</h2>
          <SvgIcon
            name="arrow"
            width={iconSize}
            height={iconSize}
            fill="text"
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            className="arrow-button"
          />
        </RoutineTitleStyle>
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
  );
};

const RoutineStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
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
    cursor: pointer;
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

export default RecordRoutine;
