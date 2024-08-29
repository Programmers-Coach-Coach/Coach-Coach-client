import { modal, TModal } from "@/data/modal";
import {
  usePatchAction,
  usePostAction
} from "@/hooks/queries/routine/useAction";
import {
  usePatchCategory,
  usePostCategory
} from "@/hooks/queries/routine/useCategory";
import {
  usePatchRoutine,
  usePostRoutine
} from "@/hooks/queries/routine/useRoutine";
import { useModalInfo } from "@/store/modalInfo.store";
import { useProfileInfo } from "@/store/profileInfo.store";
import toast from "react-hot-toast";
import styled from "styled-components";

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
  const setRoutineName = useModalInfo((state) => state.setRoutineName);
  const categoryName = useModalInfo((state) => state.categoryName);
  const setCategoryName = useModalInfo((state) => state.setCategoryName);
  const actionName = useModalInfo((state) => state.actionName);
  const setActionName = useModalInfo((state) => state.setActionName);
  const minutes = useModalInfo((state) => state.minutes);
  const setMinutes = useModalInfo((state) => state.setMinutes);
  const count = useModalInfo((state) => state.count);
  const setCount = useModalInfo((state) => state.setCount);
  const sets = useModalInfo((state) => state.sets);
  const setSets = useModalInfo((state) => state.setSets);
  const description = useModalInfo((state) => state.description);
  const setDescription = useModalInfo((state) => state.setDescription);
  const sportId = useModalInfo((state) => state.sportId);
  const setSportId = useModalInfo((state) => state.setSportId);
  const routineId = useModalInfo((state) => state.routineId);
  const categoryId = useModalInfo((state) => state.categoryId);
  const actionId = useModalInfo((state) => state.actionId);

  const userId = useProfileInfo((state) => state.userId);

  const onCancelHandler = () => {
    if (schema.startsWith("routine")) {
      setRoutineName("");
      setSportId(0);
    } else if (schema.startsWith("category")) {
      setCategoryName("");
    } else if (schema.startsWith("action")) {
      setActionName("");
      setMinutes(0);
      setCount(0);
      setSets(0);
      setDescription("");
    }
    closeModal();
  };

  const onClickHandler = () => {
    if (schema.startsWith("routine") && routineName === "") {
      toast.error("루틴명을 입력하세요");
    } else if (schema.startsWith("routine") && sportId === 0) {
      toast.error("종목을 고르세요");
    } else if (schema.startsWith("category") && categoryName === "") {
      toast.error("카테고리명을 입력하세요");
    } else if (schema.startsWith("action") && actionName === "") {
      toast.error("운동명을 입력하세요");
    } else {
      if (schema.startsWith("routine")) {
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
        }
        setRoutineName("");
        setSportId(0);
      } else if (schema.startsWith("category")) {
        if (schema === "category-enroll") {
          postCategoryResponse.mutate({ payload: { categoryName }, routineId });
        } else if (schema === "category-modify") {
          patchCategoryResponse.mutate({
            payload: { categoryName },
            categoryId
          });
        }
        setCategoryName("");
      } else if (schema.startsWith("action")) {
        if (schema === "action-enroll") {
          postActionResponse.mutate({
            payload: { actionName, minutes, counts: count, sets, description },
            categoryId
          });
        } else if (schema === "action-modify") {
          patchActionResponse.mutate({
            payload: { actionName, minutes, counts: count, sets, description },
            actionId
          });
        }
        setActionName("");
        setMinutes(0);
        setCount(0);
        setSets(0);
        setDescription("");
      }
      closeModal();
    }
  };

  return (
    <>
      <Main>{children}</Main>
      <Footer>
        <button onClick={onCancelHandler}>{secondaryButton}</button>
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

  margin-top: 10px;
`;
export default ActionModalInner;
