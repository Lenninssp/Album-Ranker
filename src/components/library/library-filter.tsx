import { X } from "lucide-react";
import { RankingColors } from "../general/ranking-colors";
import { LibraryFilterProps } from "@/types/library-types";

export const LibraryFilter = ({
  selectedFilter,
  onFilterChange,
}: LibraryFilterProps) => {
  return (
    <div className="flex w-full gap-2 justify-end">
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