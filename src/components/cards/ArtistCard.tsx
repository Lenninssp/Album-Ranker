import { Artist, ArtistEdited, TypeOfElement } from "@/types/music";
import { MediaCard } from "./MediaCard";

interface ArtistCardProps {
  artist: ArtistEdited;
  simplified?: boolean;
}

export const ArtistCard = ({ artist, simplified }: ArtistCardProps) => {
  return (
    <MediaCard
      type={TypeOfElement.ARTIST}
      element={artist}
      simplified={simplified}
    />
  );
};
