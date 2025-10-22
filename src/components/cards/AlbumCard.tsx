import { Album, AlbumEdited, RawAlbum, TypeOfElement, UserMetadata } from "@/types/music";
import { BaseMediaCard } from "./BaseMediaCard";

interface AlbumCardProps {
  album: Album;
}

export const AlbumCard = ({ album }: AlbumCardProps) => {
    let metadata: UserMetadata | undefined;
    if (album.includesMetadata) {
      metadata = {
        commentary: (album as AlbumEdited).commentary,
        tag: (album as AlbumEdited).tag,
        rating: (album as AlbumEdited).rating
      };
    }
    
  return (
    <BaseMediaCard
      type={TypeOfElement.ALBUM}
      element={album}
      headerImage={album.strAlbumThumb}
      title={album.strAlbum}
      subtitle={album.strArtist}
      year={album.intYearReleased}
      metadata={metadata}
    >
      <div className="text-sm max-h-44 overflow-auto">
        {album.strDescriptionEN || "No description available."}
      </div>
      <div className="opacity-75">{album.strGenre}</div>
    </BaseMediaCard>
  );
};
