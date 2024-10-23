import { create } from "zustand";

interface isSelectProfileProps {
  isSelectProfile: boolean;
  setIsSelectProfile: (isSelectProfile: boolean) => void;
}

export const isSelectProfile = create<isSelectProfileProps>((set) => ({
  isSelectProfile: false,
  setIsSelectProfile: (isSelectProfile) => set(() => ({ isSelectProfile }))
}));
