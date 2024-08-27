import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StoreState {
  isLoggedIn: boolean;
  storeLogin: () => void;
  storeLogout: () => void;
}

export const useAuthStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,

        storeLogin: () => set({ isLoggedIn: true }),

        storeLogout: () => set({ isLoggedIn: false })
      }),
      {
        name: "auth-storage"
      }
    )
  )
);
