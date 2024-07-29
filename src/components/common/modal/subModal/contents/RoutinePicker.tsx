import { routinePicker, TRoutinePicker } from "../../../../../data/modal";
import styled from "styled-components";

interface Props {
  schema: TRoutinePicker;
}

const RoutinePicker = ({ schema }: Props) => {
  return (
    <RoutinePickerStyle>
      {routinePicker[schema].map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </RoutinePickerStyle>
  );
};

const RoutinePickerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Item = ({ item }: { item: { name: string; onClick: () => void } }) => {
  return <ItemStyle onClick={item.onClick}>{item.name}</ItemStyle>;
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

  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};

  &:last-child {
    color: ${({ theme }) => theme.color.yellow};
    border-bottom: 0;
  }
`;

export default RoutinePicker;
