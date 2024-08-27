import { IAction } from "@/models/routine.model";
import { useModalInfo } from "@/store/modalInfo.store";
import { LineClamp } from "@/style/global";
import { styled } from "styled-components";
import IconButton from "../Icon/IconButton";

interface ActionProps {
  action: IAction;
  modifyEnabled?: boolean;
  onEditAction?: () => void;
  setAction?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setActionTime?: React.Dispatch<React.SetStateAction<number | undefined>>;
  setActionCount?: React.Dispatch<React.SetStateAction<number | undefined>>;
  setActionSets?: React.Dispatch<React.SetStateAction<number | undefined>>;
  setActionDes?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Action = ({
  action,
  setAction,
  setActionCount,
  setActionDes,
  setActionSets,
  setActionTime,
  modifyEnabled,
  onEditAction
}: ActionProps) => {
  const setActionId = useModalInfo((state) => state.setActionId);
  const setActionName = useModalInfo((state) => state.setActionName);
  const setCount = useModalInfo((state) => state.setCount);
  const setDescription = useModalInfo((state) => state.setDescription);
  const setSets = useModalInfo((state) => state.setSets);
  const setMinutes = useModalInfo((state) => state.setMinutes);

  const handleEditAction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActionId(action.actionId);
    setActionName(action.actionName);
    setCount(action.counts ? action.counts : 0);
    setDescription(action.description ? action.description : "");
    setSets(action.sets ? action.sets : 0);
    setMinutes(action.minutes ? action.minutes : 0);
    if (onEditAction) {
      onEditAction();
      setAction && setAction(action.actionName);
      setActionCount && setActionCount(action.counts);
      setActionDes && setActionDes(action.description);
      setActionSets && setActionSets(action.sets);
      setActionTime && setActionTime(action.minutes);
    }
  };

  return (
    <ActionStyle>
      <Text>
        <p className="b3">{action.actionName}</p>
        <LineClamp $line={1} className="b2">
          {action.minutes !== 0 && `${action.minutes}분`}{" "}
          {action.counts !== 0 && `${action.counts}회`}{" "}
          {action.sets !== 0 && `${action.sets}세트`}{" "}
        </LineClamp>
        <LineClamp $line={1} className="b2">
          {action.description && `${action.description}`}
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
  padding: 0 20px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Action;
