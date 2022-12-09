import { persist } from "zustand/middleware";
import create from "zustand";

type AppState = {
  isAuthorised: () => boolean;
  user?: { name: string };
  logout: () => void;
  login: (user: { name: string }) => void;
};

export const useAppState = create(
  persist<AppState>(
    (set, get) => ({
      isAuthorised: () => !!get().user,
      login: (user) => set({ user }),
      logout: () => set({ user: undefined }),
    }),
    { name: "fungi-user-data" }
  )
);
