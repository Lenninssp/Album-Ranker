// components/cards/ArtistCard.tsx
import { ArtistEdited, RawArtist, TypeOfElement, UserMetadata } from "@/types/music";
import { BaseMediaCard } from "./BaseMediaCard";

interface ArtistCardProps {
  artist: RawArtist | ArtistEdited;
}

export const ArtistCard = ({ artist }: ArtistCardProps) => {
    let metadata: UserMetadata | undefined;
    if (artist.includesMetadata) {
      metadata = {
        commentary: (artist as ArtistEdited).commentary,
        tag: (artist as ArtistEdited).tag,
        rating: (artist as ArtistEdited).rating
      };
    }
    
  return (
    <BaseMediaCard
      type={TypeOfElement.ARTIST}
      element={artist}
      headerImage={artist.strArtistThumb}
      title={artist.strArtist}
      subtitle={artist.strLabel}
      year={artist.intFormedYear}
      metadata={metadata}
    >
      <div className="text-sm leading-relaxed max-h-44 overflow-auto">
        {artist.strBiographyEN || "No biography available."}
      </div>
      <div className="opacity-75">{artist.strGenre}</div>
    </BaseMediaCard>
  );
};
