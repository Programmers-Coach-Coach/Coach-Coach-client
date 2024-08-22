import { useAuthStore } from "@/store/authStore";

export const performLogout = () => {
  const storeLogout = useAuthStore.getState().storeLogout;

  storeLogout();
};
