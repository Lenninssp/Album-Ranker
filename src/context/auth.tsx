import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  authorized: boolean;
  userId: number | null;
  userName: string;
};

type Actions = {
  toggle: () => void;
  setId: (id: number) => void;
  setName: (name: string) => void;
};

export const useSession = create<State & Actions>()(
  persist(
    (set) => ({
      authorized: false,
      userId: null,
      userName: "",
      toggle: () => set((state) => ({ authorized: !state.authorized })),
      setId: (id: number) => set(() => ({ userId: id})),
      setName: (name: string) => set(() => ({userName: name})),
    }),
    {
      name: "session-storage",
    }
  )
);
