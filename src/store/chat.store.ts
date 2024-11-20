import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useChatInfoProps {
  chatRoomId: number;
  activeHours: string;
  isMatching: boolean;
  setChatRoomId: (chatRoomId: number) => void;
  setActiveHours: (activeHours: string) => void;
  setIsMatching: (isMatching: boolean) => void;
}

export const useChatInfo = create(
  persist<useChatInfoProps>(
    (set) => ({
      chatRoomId: -1,
      activeHours: "",
      isMatching: false,
      setChatRoomId: (chatRoomId) => set(() => ({ chatRoomId })),
      setActiveHours: (activeHours) => set(() => ({ activeHours })),
      setIsMatching: (isMatching) => set(() => ({ isMatching }))
    }),
    {
      name: "useChatStorage"
    }
  )
);
