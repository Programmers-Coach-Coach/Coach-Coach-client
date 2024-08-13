import { TModal } from "@/data/modal";
import styled from "styled-components";
import { modal } from "@/data/modal";
import { usePatchRoutine, usePostRoutine } from "@/hooks/useRoutine";
import { useModalInfo } from "@/store/modalInfo.store";
import { routineDB } from "@/data/routine";

interface Props {
  children: React.ReactNode;
  schema: TModal;
  closeModal: () => void;
}

const ActionModalInner = ({ children, schema, closeModal }: Props) => {
  const { primaryButton, secondaryButton } = modal[schema];

  const postRoutineResponse = usePostRoutine();
  const patchRoutineResponse = usePatchRoutine();
  const routineName = useModalInfo((state) => state.routineName);
  const setRoutineName = useModalInfo((state) => state.setRoutineName);
  const sportId = useModalInfo((state) => state.sportId);
  const setSportId = useModalInfo((state) => state.setSportId);
  const routineId = useModalInfo((state) => state.routineId);

  const onClickHandler = () => {
    if (schema === "routine-enroll") {
      postRoutineResponse.mutateAsync({ routineName, sportId });
      routineDB.create({ routineName, sportId });
      closeModal();
    } else if (schema === "routine-modify") {
      patchRoutineResponse.mutateAsync(routineId);
      routineDB.update(routineId, { routineName, sportId });
      closeModal();
    }
    setRoutineName("");
    setSportId(-1);
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
