import { create } from "zustand";

interface ModalInfoProps {
  sportId: number;
  routineName: string;
  categoryName: string;
  actionName: string;
  sets: string;
  countOrMinutes: string;
  description: string;
  routineId: number;
  categoryId: number;
  actionId: number;
  setSportId: (sportId: number) => void;
  setRoutineName: (routineName: string) => void;
  setCategoryName: (categoryName: string) => void;
  setActionName: (actionName: string) => void;
  setSets: (sets: string) => void;
  setCountOrMinutes: (countOrMinutes: string) => void;
  setDescription: (description: string) => void;
  setRoutineId: (routineId: number) => void;
  setCategoryId: (categoryId: number) => void;
  setActionId: (actionId: number) => void;
}

export const useModalInfo = create<ModalInfoProps>((set) => ({
  sportId: -1,
  routineName: "",
  categoryName: "",
  actionName: "",
  sets: "",
  countOrMinutes: "",
  description: "",
  routineId: -1,
  categoryId: -1,
  actionId: -1,
  setSportId: (sportId) => set(() => ({ sportId: sportId })),
  setRoutineName: (routineName) => set(() => ({ routineName: routineName })),
  setCategoryName: (categoryName) =>
    set(() => ({ categoryName: categoryName })),
  setActionName: (actionName) => set(() => ({ actionName: actionName })),
  setSets: (sets) => set(() => ({ sets: sets })),
  setCountOrMinutes: (countOrMinutes) =>
    set(() => ({ countOrMinutes: countOrMinutes })),
  setDescription: (description) => set(() => ({ description: description })),
  setRoutineId: (routineId: number) => set(() => ({ routineId: routineId })),
  setCategoryId: (categoryId: number) =>
    set(() => ({ categoryId: categoryId })),
  setActionId: (actionId: number) => set(() => ({ actionId }))
}));
