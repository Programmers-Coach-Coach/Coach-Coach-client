import CustomButton from "@/components/common/Button/CustomButton";
import RoutineInput from "@/components/common/InputField/Text/RoutineInput";
import OneButtonContent from "@/components/common/modal/contents/OneButtonContent";
import RepeatContent from "@/components/common/modal/contents/RepeatContent";
import SportsContent from "@/components/common/modal/contents/SportsContent";
import Modal from "@/components/common/modal/Modal";
import Loading from "@/components/loading/Loading";
import AddAction from "@/components/routine/AddAction";
import { usePatchRoutine, usePostRoutine } from "@/hooks/queries/useRoutine";
import useHome from "@/hooks/useHome";
import useModal from "@/hooks/useModal";
import { isNewRoutine } from "@/store/isNewRoutine.store";
import { useRoutineStore } from "@/store/routine.store";
import { WhiteSpace } from "@/style/global";
import { ButtonSize } from "@/style/theme";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

const ACTION_COUNT = 4;
const DAYS_ORDER = ["일", "월", "화", "수", "목", "금", "토"];
const DAYS = {
  SUN: "일",
  MON: "월",
  TUE: "화",
  WED: "수",
  THU: "목",
  FRI: "금",
  SAT: "토"
};

const AddRoutine = () => {
  const sportModal = useModal();
  const repeatModal = useModal();
  const routine = useRoutineStore((set) => set.routine);
  const setRoutineName = useRoutineStore((set) => set.setRoutineName);
  const addAction = useRoutineStore((set) => set.addAction);
  const isNew = isNewRoutine((set) => set.isNewRoutine);
  const [size, setSize] = useState<ButtonSize>("desktop");
  const [fontSize, setFontSize] = useState<string>("22px");
  const navigate = useNavigate();

  const postRequest = usePostRoutine();
  const patchRequest = usePatchRoutine();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setSize("desktop");
        setFontSize("22px");
      } else {
        setSize("mobile");
        setFontSize("5vw");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data, isLoading } = useHome();
  if (isLoading) return <Loading />;

  const sportList = data ? data.sports : [];
  const repeatValue = routine.repeats
    ? routine.repeats
        .map((repeat) => DAYS[repeat as keyof typeof DAYS])
        .sort((a, b) => DAYS_ORDER.indexOf(a) - DAYS_ORDER.indexOf(b))
    : [];
  const repeatText = repeatValue ? repeatValue.join(", ") : "";

  const onClickAdd = () => {
    if (routine.actions.length < ACTION_COUNT) {
      const newAction = {
        actionId: uuidv4(),
        actionName: "",
        sets: 0,
        countsOrMinutes: 0
      };
      addAction(newAction);
    } else {
      toast.error(`운동은 ${ACTION_COUNT}가지 까지 입력가능합니다.`);
    }
  };

  const onClickPost = () => {
    const postActions = routine.actions.map((action) => ({
      actionName: action.actionName,
      sets: typeof action.sets === "string" ? 0 : action.sets,
      countsOrMinutes:
        typeof action.countsOrMinutes === "string" ? 0 : action.countsOrMinutes
    }));

    const postRoutine = {
      routineName: routine.routineName,
      sportId: routine.sportId ? routine.sportId : 0,
      repeats: routine.repeats,
      actions: postActions
    };

    postRequest.mutate(postRoutine);
    navigate(-1);
  };

  const onClickPatch = () => {
    const patchActions = routine.actions.map((action) => {
      const baseAction = {
        actionName: action.actionName,
        sets: typeof action.sets === "string" ? 0 : action.sets,
        countsOrMinutes:
          typeof action.countsOrMinutes === "string"
            ? 0
            : action.countsOrMinutes
      };

      // actionId가 number인 경우에만 추가
      if (typeof action.actionId === "number") {
        return {
          ...baseAction,
          actionId: action.actionId
        };
      }

      return baseAction;
    });

    const patchRoutine = {
      routineName: routine.routineName,
      sportId: routine.sportId ? routine.sportId : 0,
      repeats: routine.repeats,
      actions: patchActions
    };

    const id = routine.routineId ? routine.routineId : 0;

    patchRequest.mutate({ payload: patchRoutine, routineId: id });
    navigate(-1);
  };

  return (
    <>
      {sportModal.isModal && (
        <Modal closeModal={sportModal.closeModal} position="footer-above">
          <OneButtonContent title="운동 종목 선택" buttonText="선택완료">
            <SportsContent
              sportList={sportList}
              closeModal={sportModal.closeModal}
            />
          </OneButtonContent>
        </Modal>
      )}
      {repeatModal.isModal && (
        <Modal closeModal={repeatModal.closeModal} position="footer-above">
          <OneButtonContent title="운동 반복 설정" buttonText="선택완료">
            <RepeatContent
              repeats={routine.repeats}
              closeModal={repeatModal.closeModal}
            />
          </OneButtonContent>
        </Modal>
      )}
      <AddRoutineStyle>
        <RoutineInput
          label="루틴 이름"
          placeholder="루틴 이름을 입력해 주세요"
          value={routine.routineName}
          setRoutineName={setRoutineName}
        />
        <WhiteSpace $height={10} />
        <RoutineInput
          label="종목"
          placeholder="운동 종목을 선택해 주세요"
          value={routine.sportName}
          isSelect={true}
          onClickHandler={sportModal.openModal}
        />
        <WhiteSpace $height={10} />
        <RoutineInput
          label="반복"
          placeholder="운동 반복 기간을 설정해 주세요"
          value={repeatText}
          isSelect={true}
          onClickHandler={repeatModal.openModal}
        />
        <WhiteSpace $height={20} />
        <UnderlineStyle />
        <p onClick={onClickAdd}>+운동 추가 하기</p>
        {routine.actions.map((action, index) => (
          <AddAction key={action.actionId} index={index} action={action} />
        ))}
        <WhiteSpace $height={10} />
        <ButtonStyle>
          <CustomButton
            size={size}
            variant="contained"
            onClick={isNew ? onClickPost : onClickPatch}
            fontSize={fontSize}
          >
            {isNew ? "추가하기" : "수정하기"}
          </CustomButton>
        </ButtonStyle>
      </AddRoutineStyle>
    </>
  );
};

const AddRoutineStyle = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 80px;

  p {
    margin: 2vw 4vw 1.3vw 0;
    font-size: 3vw;
    color: #0075ff;
    font-weight: bold;
    align-self: flex-end;
    cursor: pointer;

    @media (min-width: 600px) {
      margin: 12px 16px 8px 0;
      font-size: 14px;
    }
  }
`;

const UnderlineStyle = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 3%;
    width: 94%;
    height: 0.08rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default AddRoutine;
