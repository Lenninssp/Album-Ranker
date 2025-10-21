import { create } from "zustand";

type State = {
  authorized: boolean;
}

type Actions = {
  toggle: () => void;
}


export const useSession = create<State & Actions>((set) => ({
  authorized: false,
  toggle: () => set((state) => ({authorized: !state.authorized})),
}))