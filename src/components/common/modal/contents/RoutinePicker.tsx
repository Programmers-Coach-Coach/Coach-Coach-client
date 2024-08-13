import {
  IRoutinePickerData,
  routinePicker,
  TRoutinePicker
} from "@/data/modal";
import { routineDB } from "@/data/routine";
import { useDeleteRoutine } from "@/hooks/useRoutine";
import { useModalInfo } from "@/store/modalInfo.store";
import styled from "styled-components";

interface Props {
  schema: TRoutinePicker;
  closeModal: () => void;
}

const RoutinePicker = ({ schema, closeModal }: Props) => {
  return (
    <RoutinePickerStyle>
      {routinePicker[schema].map((item, i) => (
        <Item item={item} key={i} closeModal={closeModal} />
      ))}
    </RoutinePickerStyle>
  );
};

const RoutinePickerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Item = ({
  item,
  closeModal
}: {
  item: IRoutinePickerData;
  closeModal: () => void;
}) => {
  const deleteRoutineResponse = useDeleteRoutine();
  const routineId = useModalInfo((state) => state.routineId);

  const onClickHandler = () => {
    if (item.name === "루틴 삭제") {
      deleteRoutineResponse.mutateAsync(routineId);
      routineDB.delete(routineId);
      closeModal();
    } else if (item.name === "취소") {
      closeModal();
    }
  };

  return <ItemStyle onClick={onClickHandler}>{item.name}</ItemStyle>;
};

const ItemStyle = styled.div`
  margin: 0 30px;
  padding: 15px 0;
  text-align: center;
  cursor: pointer;

  /** todo: title 공통 컴포넌트 제작 후 대체 */
  font-size: 20px;
  line-height: 36px;
  font-weight: bold;

  border-bottom: 1px solid ${({ theme }) => theme.color.box};

  &:last-child {
    color: ${({ theme }) => theme.color.primary};
    border-bottom: 0;
  }
`;

export default RoutinePicker;
