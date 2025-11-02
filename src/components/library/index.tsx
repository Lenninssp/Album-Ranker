import { useSavedItems } from "@/context/savedItems";
import { useState } from "react";
import { Rating } from "@/types/ratingColor";
import { useSimplifiedState } from "@/hooks/useSimplifiedReducer";
import { LibraryComponentProps } from "@/types/library-types";
import { EmptyLibrary } from "./empty-library";
import { LibraryFilter } from "./library-filter";
import { AlbumsSection } from "./album-section";
import { TracksSection } from "./tracks-section";
import { ArtistsSection } from "./artists-section";
import { TagsFilter } from "./tags-filter";

export const LibraryComponent = ({ className }: LibraryComponentProps) => {
  const { savedArtists, savedAlbums, savedTracks } = useSavedItems();
  const [state, dispatch] = useSimplifiedState();
  const [selectedFilter, setSelectedFilter] = useState<Rating | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const artistsEmpty = savedArtists.length === 0;
  const albumsEmpty = savedAlbums.length === 0;
  const tracksEmpty = savedTracks.length === 0;
  const allEmpty = artistsEmpty && albumsEmpty && tracksEmpty;

  if (allEmpty) {
    return <EmptyLibrary className={className} />;
  }

  return (
    <div className="flex flex-col w-full gap-3 h-full">
      <div className="flex w-full gap-2 justify-between">
        <TagsFilter action={setSelectedFolder} selected={selectedFolder} />
        <LibraryFilter
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      </div>

      <AlbumsSection
        selectedFilter={selectedFilter}
        simplifiedState={state}
        dispatch={dispatch}
      />

      <TracksSection
        selectedFilter={selectedFilter}
        simplifiedState={state}
        dispatch={dispatch}
        state={state}
      />

      <ArtistsSection
        selectedFilter={selectedFilter}
        simplifiedState={state}
        dispatch={dispatch}
        state={state}
      />
    </div>
  );
};
