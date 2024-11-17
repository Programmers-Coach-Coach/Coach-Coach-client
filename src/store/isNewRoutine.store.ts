import { create } from "zustand";
import { persist } from "zustand/middleware";

interface isNewRoutineProps {
  isNewRoutine: boolean;
  setIsNewRoutine: (isNewRoutine: boolean) => void;
}

export const isNewRoutine = create<isNewRoutineProps>()(
  persist(
    (set) => ({
      isNewRoutine: true,
      setIsNewRoutine: (isNewRoutine) => set(() => ({ isNewRoutine }))
    }),
    {
      name: "isNewRoutine-storage" // 로컬 스토리지에 저장될 키 이름
    }
  )
);
