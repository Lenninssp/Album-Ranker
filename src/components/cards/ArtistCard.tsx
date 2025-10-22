// components/cards/ArtistCard.tsx
import { Artist, TypeOfElement } from "@/types/music";
import { BaseMediaCard } from "./BaseMediaCard";

interface ArtistCardProps {
  artist: Artist;
}

export const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <BaseMediaCard
      type={TypeOfElement.ARTIST}
      element={artist}
      headerImage={artist.strArtistThumb}
      title={artist.strArtist}
      subtitle={artist.strLabel}
      year={artist.intFormedYear}
    >
      <div className="text-sm leading-relaxed max-h-44 overflow-auto">
        {artist.strBiographyEN || "No biography available."}
      </div>
      <div className="opacity-75">{artist.strGenre}</div>
    </BaseMediaCard>
  );
};
