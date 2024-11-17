import create from "zustand";
import { persist } from "zustand/middleware";

interface Action {
  actionId: number | string;
  actionName: string;
  sets: number | string;
  countsOrMinutes: number | string;
}

interface Routine {
  routineId?: number;
  routineName: string;
  sportId?: number;
  sportName: string;
  repeats: string[];
  actions: Action[];
}

interface RoutineStore {
  routine: Routine;
  setRoutine: (newRoutine: Routine) => void;
  setSportName: (sportName: string) => void;
  setRoutineName: (name: string) => void;
  setSportId: (sportId: number) => void;
  setRepeats: (repeats: string[]) => void;
  setAction: (index: number, updatedAction: Partial<Action>) => void;
  addAction: (newAction: Action) => void;
  removeAction: (index: number) => void;
  resetRoutine: () => void;
}

// 초기 상태 정의
const initialRoutine: Routine = {
  routineName: "",
  sportId: 0,
  sportName: "",
  repeats: [],
  actions: []
};

// Zustand 스토어 생성, persist 미들웨어 적용
export const useRoutineStore = create<RoutineStore>()(
  persist(
    (set) => ({
      routine: initialRoutine,
      sportName: "",

      // 전체 routine을 업데이트하는 함수
      setRoutine: (newRoutine: Routine) =>
        set(() => ({
          routine: newRoutine
        })),

      // sportName을 변경하는 함수
      setSportName: (name: string) =>
        set((state) => ({
          routine: {
            ...state.routine,
            sportName: name
          }
        })),

      // routineName을 변경하는 함수
      setRoutineName: (name: string) =>
        set((state) => ({
          routine: {
            ...state.routine,
            routineName: name
          }
        })),

      // sportId를 변경하는 함수
      setSportId: (sportId: number) =>
        set((state) => ({
          routine: {
            ...state.routine,
            sportId
          }
        })),

      // repeats를 변경하는 함수
      setRepeats: (repeats: string[]) =>
        set((state) => ({
          routine: {
            ...state.routine,
            repeats
          }
        })),

      // actions 배열에서 특정 인덱스의 action을 업데이트하는 함수
      setAction: (index: number, updatedAction: Partial<Action>) =>
        set((state) => ({
          routine: {
            ...state.routine,
            actions: state.routine.actions.map((action, i) =>
              i === index ? { ...action, ...updatedAction } : action
            )
          }
        })),

      // 새로운 action을 추가하는 함수
      addAction: (newAction: Action) =>
        set((state) => ({
          routine: {
            ...state.routine,
            actions: [...state.routine.actions, newAction]
          }
        })),

      // 특정 인덱스의 action을 삭제하는 함수
      removeAction: (index: number) =>
        set((state) => ({
          routine: {
            ...state.routine,
            actions: state.routine.actions.filter((_, i) => i !== index)
          }
        })),

      // 초기 상태로 리셋하는 함수
      resetRoutine: () =>
        set(() => ({
          routine: initialRoutine
        }))
    }),
    {
      name: "routine-storage"
    }
  )
);
