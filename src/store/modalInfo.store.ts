import { create } from "zustand";

interface ModalInfoProps {
  sportId: number;
  routineName: string;
  categoryName: string;
  actionName: string;
  sets: number;
  count: number;
  minutes: number;
  description: string;
  routineId: number;
  categoryId: number;
  actionId: number;
  setSportId: (sportId: number) => void;
  setRoutineName: (routineName: string) => void;
  setCategoryName: (categoryName: string) => void;
  setActionName: (actionName: string) => void;
  setSets: (sets: number) => void;
  setCount: (count: number) => void;
  setMinutes: (minutes: number) => void;
  setDescription: (description: string) => void;
  setRoutineId: (routineId: number) => void;
  setCategoryId: (categoryId: number) => void;
  setActionId: (actionId: number) => void;
}

export const useModalInfo = create<ModalInfoProps>((set) => ({
  sportId: 0,
  routineName: "",
  categoryName: "",
  actionName: "",
  sets: 0,
  count: 0,
  minutes: 0,
  description: "",
  routineId: -1,
  categoryId: -1,
  actionId: -1,
  setSportId: (sportId) => set(() => ({ sportId })),
  setRoutineName: (routineName) => set(() => ({ routineName })),
  setCategoryName: (categoryName) =>
    set(() => ({ categoryName: categoryName })),
  setActionName: (actionName) => set(() => ({ actionName })),
  setSets: (sets) => set(() => ({ sets })),
  setCount: (count) => set(() => ({ count })),
  setMinutes: (minutes) => set(() => ({ minutes })),
  setDescription: (description) => set(() => ({ description })),
  setRoutineId: (routineId) => set(() => ({ routineId })),
  setCategoryId: (categoryId) => set(() => ({ categoryId })),
  setActionId: (actionId) => set(() => ({ actionId }))
}));
