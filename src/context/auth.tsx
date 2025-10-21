import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  authorized: boolean;
};

type Actions = {
  toggle: () => void;
};

export const useSession = create<State & Actions>()(
  persist(
    (set) => ({
      authorized: false,
      toggle: () => set((state) => ({ authorized: !state.authorized })),
    }),
    {
      name: "session-storage",
    }
  )
);
