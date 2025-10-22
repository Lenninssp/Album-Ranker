import { Album, TypeOfElement } from "@/types/music";
import { BaseMediaCard } from "./BaseMediaCard";

interface AlbumCardProps {
  album: Album;
}

export const AlbumCard = ({ album }: AlbumCardProps) => {
  return (
    <BaseMediaCard
      type={TypeOfElement.ALBUM}
      element={album}
      headerImage={album.strAlbumThumb}
      title={album.strAlbum}
      subtitle={album.strArtist}
      year={album.intYearReleased}
    >
      <div className="text-sm max-h-44 overflow-auto">
        {album.strDescriptionEN || "No description available."}
      </div>
      <div className="opacity-75">{album.strGenre}</div>
    </BaseMediaCard>
  );
};
