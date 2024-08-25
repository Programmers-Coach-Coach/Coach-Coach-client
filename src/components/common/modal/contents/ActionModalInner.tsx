import { TModal } from "@/data/modal";
import styled from "styled-components";
import { modal } from "@/data/modal";
import {
  usePatchRoutine,
  usePostRoutine
} from "@/hooks/queries/routine/useRoutine";
import { useModalInfo } from "@/store/modalInfo.store";
import {
  usePatchAction,
  usePostAction
} from "@/hooks/queries/routine/useAction";
import {
  usePatchCategory,
  usePostCategory
} from "@/hooks/queries/routine/useCategory";
import { useProfileInfo } from "@/store/profileInfo.store";

interface Props {
  children: React.ReactNode;
  schema: TModal;
  isCoach?: boolean;
  closeModal: () => void;
}

const ActionModalInner = ({
  children,
  schema,
  closeModal,
  isCoach = false
}: Props) => {
  const { primaryButton, secondaryButton } = modal[schema];

  const postRoutineResponse = usePostRoutine();
  const patchRoutineResponse = usePatchRoutine();
  const postCategoryResponse = usePostCategory();
  const patchCategoryResponse = usePatchCategory();
  const postActionResponse = usePostAction();
  const patchActionResponse = usePatchAction();

  const routineName = useModalInfo((state) => state.routineName);
  const categoryName = useModalInfo((state) => state.categoryName);
  const actionName = useModalInfo((state) => state.actionName);
  const countOrMinutes = useModalInfo((state) => state.countOrMinutes);
  const sets = useModalInfo((state) => state.sets);
  const description = useModalInfo((state) => state.description);
  const sportId = useModalInfo((state) => state.sportId);
  const routineId = useModalInfo((state) => state.routineId);
  const categoryId = useModalInfo((state) => state.categoryId);
  const actionId = useModalInfo((state) => state.actionId);

  const userId = useProfileInfo((state) => state.userId);

  const onClickHandler = () => {
    if (schema === "routine-enroll") {
      if (isCoach) {
        postRoutineResponse.mutate({ userId, routineName, sportId });
      } else {
        postRoutineResponse.mutate({ routineName, sportId });
      }
    } else if (schema === "routine-modify") {
      patchRoutineResponse.mutate({
        payload: { routineName, sportId },
        routineId
      });
    } else if (schema === "category-enroll") {
      postCategoryResponse.mutate({ payload: { categoryName }, routineId });
    } else if (schema === "category-modify") {
      patchCategoryResponse.mutate({
        payload: { categoryName },
        categoryId
      });
    } else if (schema === "action-enroll") {
      postActionResponse.mutate({
        payload: { actionName, countOrMinutes, sets, description },
        categoryId
      });
    } else if (schema === "action-modify") {
      patchActionResponse.mutate({
        payload: { actionName, countOrMinutes, sets, description },
        actionId
      });
    }
    closeModal();
  };

  return (
    <>
      <Main>{children}</Main>
      <Footer>
        <button onClick={closeModal}>{secondaryButton}</button>
        <button onClick={onClickHandler}>{primaryButton}</button>
      </Footer>
    </>
  );
};

const Main = styled.div``;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  button:first-of-type {
    color: inherit;
  }
  button:nth-of-type(2) {
    color: ${({ theme }) => theme.color.primary};
  }
`;
export default ActionModalInner;
