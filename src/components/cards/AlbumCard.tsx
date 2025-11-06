import { AlbumEdited, TypeOfElement } from "@/types/music";
import { MediaCard } from "./MediaCard";

interface AlbumCardProps {
  album: AlbumEdited;
  simplified?: boolean;
}

export const AlbumCard = ({ album, simplified }: AlbumCardProps) => {
  return (
    <MediaCard
      type={TypeOfElement.ALBUM}
      element={album}
      simplified={simplified}
    />
  );
};