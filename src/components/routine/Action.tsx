import { IAction } from "@/models/routine.model";
import { styled } from "styled-components";
import IconButton from "../Icon/IconButton";
import { LineClamp } from "@/style/global";
import { useModalInfo } from "@/store/modalInfo.store";

interface ActionProps {
  action: IAction;
  routineId: number;
  categoryId: number;
  modifyEnabled?: boolean;
  onEditAction?: () => void;
}

const Action = ({
  action,
  routineId,
  categoryId,
  modifyEnabled,
  onEditAction
}: ActionProps) => {
  const setRoutineId = useModalInfo((state) => state.setRoutineId);
  const setCategoryId = useModalInfo((state) => state.setCategoryId);
  const setActionId = useModalInfo((state) => state.setActionId);

  const handleEditAction = () => {
    setRoutineId(routineId);
    setActionId(action.actionId);
    setCategoryId(categoryId);
    onEditAction && onEditAction();
  };

  return (
    <ActionStyle>
      <Text>
        <p className="b3">{action.actionName}</p>
        <LineClamp $line={1} className="b2">
          {action.countOrMinutes}회/분 {action.sets}세트
        </LineClamp>
      </Text>
      {modifyEnabled && (
        <IconButton
          name="dots"
          color="text"
          size="24px"
          onClick={handleEditAction}
        />
      )}
    </ActionStyle>
  );
};

const ActionStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Action;
