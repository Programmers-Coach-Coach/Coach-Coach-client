import { create } from "zustand";

interface useProfileInfoProps {
  coachId: number;
  userId: number;
  profileName: string;
  profileImageUrl: string | null;
  setCoachId: (coachId: number) => void;
  setUserId: (userId: number) => void;
  setProfileName: (profileName: string) => void;
  setProfileImageUrl: (profileImageUrl: string | null) => void;
}

export const useProfileInfo = create<useProfileInfoProps>((set) => ({
  coachId: -1,
  userId: -1,
  profileName: "",
  profileImageUrl: null,
  setCoachId: (coachId) => set(() => ({ coachId })),
  setUserId: (userId) => set(() => ({ userId })),
  setProfileName: (profileName) => set(() => ({ profileName })),
  setProfileImageUrl: (profileImageUrl) => set(() => ({ profileImageUrl }))
}));
