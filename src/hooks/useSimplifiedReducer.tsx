import { useReducer } from "react";
import { TypeOfElement } from "@/types/music";
import { SimplifiedAction, SimplifiedState } from "@/types/library-types";


function simplifiedReducer(
  state: SimplifiedState,
  action: SimplifiedAction
): SimplifiedState {
  switch (action.element) {
    case TypeOfElement.TRACK:
      return { ...state, trackSimplified: action.value };
    case TypeOfElement.ALBUM:
      return { ...state, albumSimplified: action.value };
    case TypeOfElement.ARTIST:
      return { ...state, artistSimplified: action.value };
    default:
      return state;
  }
}

const initialState: SimplifiedState = {
  trackSimplified: true,
  albumSimplified: true,
  artistSimplified: true,
};

export const useSimplifiedState = () => {
  return useReducer(simplifiedReducer, initialState);
};