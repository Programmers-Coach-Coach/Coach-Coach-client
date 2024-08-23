import {
  IRoutinePickerData,
  routinePicker,
  TRoutinePicker
} from "@/data/modal";
import { useDeleteMember, usePatchMember } from "@/hooks/useMember";
import { useDeleteRoutine } from "@/hooks/queries/routine/useRoutine";
import { useModalInfo } from "@/store/modalInfo.store";
import { useProfileInfo } from "@/store/profileInfo.store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDeleteCategory } from "@/hooks/queries/routine/useCategory";
import { useDeleteAction } from "@/hooks/queries/routine/useAction";

type OpenModalKey = "categoryModify" | "actionAdd" | "actionModify";

type OpenModalType = {
  [key in OpenModalKey]?: () => void;
};

interface Props {
  schema: TRoutinePicker;
  closeModal: () => void;
  openModal?: OpenModalType;
}

const RoutinePicker = ({ schema, closeModal, openModal }: Props) => {
  return (
    <RoutinePickerStyle>
      {routinePicker[schema].map((item, i) => (
        <Item
          type={schema}
          item={item}
          key={i}
          closeModal={closeModal}
          openModal={openModal}
        />
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
  closeModal,
  openModal,
  type
}: {
  item: IRoutinePickerData;
  closeModal: () => void;
  openModal?: OpenModalType;
  type: TRoutinePicker;
}) => {
  const navigate = useNavigate();
  const deleteRoutineResponse = useDeleteRoutine();
  const deleteMemberResponse = useDeleteMember();
  const patchMemberResponse = usePatchMember();
  const deleteCategoryResponse = useDeleteCategory();
  const deleteActionResponse = useDeleteAction();

  const routineId = useModalInfo((state) => state.routineId);
  const categoryId = useModalInfo((state) => state.categoryId);
  const actionId = useModalInfo((state) => state.actionId);
  const userId = useProfileInfo((state) => state.userId);
  const profileName = useProfileInfo((state) => state.profileName);

  const onClickHandler = () => {
    if (type === "delete") {
      if (item.name === "루틴 삭제") {
        deleteRoutineResponse.mutate(routineId);
      }
    } else if (type === "matching") {
      if (item.name === "루틴 작성") {
        navigate(`/routine/member/${userId}?member=${profileName}`);
      } else if (item.name === "삭제") {
        deleteMemberResponse.mutate(userId);
      }
    } else if (type === "inquiry") {
      if (item.name === "회원 추가") {
        patchMemberResponse.mutate(userId);
      } else if (item.name === "거절") {
        deleteMemberResponse.mutate(userId);
      }
    } else if (type === "category") {
      if (item.name === "카테고리 수정") {
        openModal?.categoryModify?.();
      } else if (item.name === "카테고리 삭제") {
        deleteCategoryResponse.mutate({ routineId, categoryId });
      } else if (item.name === "운동 추가") {
        openModal?.actionAdd?.();
      }
    } else if (type === "action") {
      if (item.name === "운동 수정") {
        openModal?.actionModify?.();
      } else if (item.name === "운동 삭제") {
        deleteActionResponse.mutate({ routineId, categoryId, actionId });
      }
    }
    closeModal();
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

  &:nth-child(2) {
    color: ${({ theme }) => theme.color.error};
    border-bottom: 0;
  }

  &:nth-child(3) {
    color: ${({ theme }) => theme.color.primary};
    border-bottom: 0;
  }
`;

export default RoutinePicker;
