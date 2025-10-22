import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  authorized: boolean;
  userId: number | null;
};

type Actions = {
  toggle: () => void;
  setId: (id: number) => void;
};

export const useSession = create<State & Actions>()(
  persist(
    (set) => ({
      authorized: false,
      userId: null,
      toggle: () => set((state) => ({ authorized: !state.authorized })),
      setId: (id: number) => set(() => ({ userId: id}))
    }),
    {
      name: "session-storage",
    }
  )
);
