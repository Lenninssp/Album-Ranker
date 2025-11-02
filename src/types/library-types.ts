import { TypeOfElement } from "@/types/music";
import { Rating } from "@/types/ratingColor";

export interface LibraryComponentProps {
  className?: string;
}

export type SimplifiedState = {
  trackSimplified: boolean;
  albumSimplified: boolean;
  artistSimplified: boolean;
};

export type SimplifiedAction = {
  element: TypeOfElement;
  value: boolean;
};

export interface SimplySwitchProps {
  element: TypeOfElement;
  state: SimplifiedState;
  dispatch: (action: SimplifiedAction) => void;
}

export interface LibraryFilterProps {
  selectedFilter: Rating | null;
  onFilterChange: (filter: Rating | null) => void;
}

export interface LibrarySectionProps {
  selectedFilter: Rating | null;
  simplifiedState: SimplifiedState;
}
