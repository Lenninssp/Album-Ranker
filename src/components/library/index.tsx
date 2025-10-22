import { useSavedItems } from "@/context/savedItems";
import { cn } from "@/lib/utils";
import { ArtistCard } from "../cards/ArtistCard";
import { AlbumCard } from "../cards/AlbumCard";
import { TrackCard } from "../cards/TrackCard";

interface LibraryComponentProps {
  className?: string;
}
export const LibraryComponent = ({ className }: LibraryComponentProps) => {
  const { savedArtists, savedAlbums, savedTracks } = useSavedItems();

  const artistsEmpty: boolean = savedArtists.length === 0 ? true : false;
  const albumsEmpty: boolean = savedAlbums.length === 0 ? true : false;
  const tracksEmpty: boolean = savedTracks.length === 0 ? true : false;
  const allEmpty: boolean =
    artistsEmpty && albumsEmpty && tracksEmpty ? true : false;

  if (allEmpty) {
    return (
      <div className={cn("text-xl", className)}>
        Your library is empty, please add some elementes (track, album, artist)
        to see something here
      </div>
    );
  }
  return (
    <div className=" flex flex-col w-full gap-3 h-full">
      <div className=" text-2xl font-semibold">Artists</div>
      {savedArtists.map((artist) => (
        <ArtistCard artist={artist} key={artist.idArtist} />
      ))}
      <div className=" text-2xl font-semibold">Albums</div>

       {savedAlbums.map((album) => (
        <AlbumCard album={album} key={album.idArtist} />
      ))}
      <div className=" text-2xl font-semibold">Songs</div>
       {savedTracks.map((track) => (
        <TrackCard track={track} key={track.idTrack} />
      ))}
    </div>
  );
};
