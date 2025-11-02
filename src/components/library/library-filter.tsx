import { X } from "lucide-react";
import { RankingColors } from "../general/ranking-colors";
import { LibraryFilterProps } from "@/types/library-types";
import { useSavedItems } from "@/context/savedItems";
import { TagsFilter } from "./tags-filter";

export const LibraryFilter = ({
  selectedFilter,
  onFilterChange,
}: LibraryFilterProps) => {
  return (
      <div className="flex gap-2 items-center">
        <RankingColors action={onFilterChange} selected={selectedFilter} />
        <button
          className="cursor-pointer"
          onClick={() => onFilterChange(null)}
          aria-label="Clear filter"
        >
          <X />
        </button>
      </div>
  );
};
