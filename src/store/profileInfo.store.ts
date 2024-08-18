import { create } from "zustand";

interface useProfileInfoProps {
  coachId: number;
  userId: number;
  profileImageUrl: string | null;
  setCoachId: (coachId: number) => void;
  setUserId: (userId: number) => void;
  setProfileImageUrl: (profileImageUrl: string | null) => void;
}

export const useProfileInfo = create<useProfileInfoProps>((set) => ({
  coachId: -1,
  userId: -1,
  profileImageUrl: null,
  setCoachId: (coachId) => set(() => ({ coachId })),
  setUserId: (userId) => set(() => ({ userId })),
  setProfileImageUrl: (profileImageUrl) => set(() => ({ profileImageUrl }))
}));
