import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface StoreState {
  isLoggedIn: boolean;
  isPasswordConfirmed: boolean;
  storeLogin: () => void;
  storeLogout: () => void;
  confirmPassword: () => void;
  resetPasswordConfirmation: () => void;
}

export const useAuthStore = create<StoreState>()(
  devtools((set) => ({
    isLoggedIn: false,
    isPasswordConfirmed: false,

    storeLogin: () => {
      set({ isLoggedIn: true });
    },

    storeLogout: () => {
      set({ isLoggedIn: false, isPasswordConfirmed: false });
    },

    confirmPassword: () => {
      set({ isPasswordConfirmed: true });
    },

    resetPasswordConfirmation: () => {
      set({ isPasswordConfirmed: false });
    }
  }))
);
