import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useIsCoachProps {
  isCoach: boolean;
  isModify: boolean;
  isUser: boolean;
  setIsCoach: (isCoach: boolean) => void;
  setIsModify: (isCoach: boolean) => void;
  setIsUser: (isCoach: boolean) => void;
}

export const useIsCoach = create(
  persist<useIsCoachProps>(
    (set) => ({
      isCoach: false,
      isModify: false,
      isUser: false,
      setIsCoach: (isCoach) => set(() => ({ isCoach })),
      setIsModify: (isModify) => set(() => ({ isModify })),
      setIsUser: (isUser) => set(() => ({ isUser }))
    }),
    {
      name: "isCoachStorage"
    }
  )
);
