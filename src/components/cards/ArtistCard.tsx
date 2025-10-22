// components/cards/ArtistCard.tsx
import { Artist, TypeOfElement, UserMetadata } from "@/types/music";
import { BaseMediaCard } from "./BaseMediaCard";

interface ArtistCardProps {
  artist: Artist;
}

export const ArtistCard = ({ artist }: ArtistCardProps) => {
  let metadata: UserMetadata | undefined;
  console.log(artist)
  if (artist.includesMetadata) {
  console.log("It includes it")

    metadata = {
      commentary: artist.commentary,
      tag: artist.tag,
      rating: artist.rating
    };
    console.log(metadata)
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
