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
  getId: () => number | null;
  setName: (name: string) => void;
  getName: () => string;
};

export const useSession = create<State & Actions>()(
  persist(
    (set, get) => ({
      authorized: false,
      userId: null,
      userName: "",
      toggle: () => set((state) => ({ authorized: !state.authorized })),
      setId: (id: number) => set(() => ({ userId: id })),
      setName: (name: string) => set(() => ({ userName: name })),
      getName: () => get().userName,
      getId: ()=>get().userId,
    }),

    {
      name: "session-storage",
    }
  )
);
