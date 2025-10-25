import { useSavedItems } from "@/context/savedItems";
import { cn } from "@/lib/utils";
import { ArtistCard } from "../cards/ArtistCard";
import { AlbumCard } from "../cards/AlbumCard";
import { TrackCard } from "../cards/TrackCard";
import { Switch } from "../ui/switch";
import { useReducer } from "react";
import { TypeOfElement } from "@/types/music";

interface LibraryComponentProps {
  className?: string;
}

type SimplifiedState = {
  trackSimplified: boolean;
  albumSimplified: boolean;
  artistSimplified: boolean;
};

// The action now includes the element and the new toggle state
type Action = {
  element: TypeOfElement;
  value: boolean;
};

function reducer(state: SimplifiedState, action: Action): SimplifiedState {
  switch (action.element) {
    case TypeOfElement.TRACK:
      return { ...state, trackSimplified: action.value };
    case TypeOfElement.ALBUM:
      return { ...state, albumSimplified: action.value };
    case TypeOfElement.ARTIST:
      return { ...state, artistSimplified: action.value };
    default:
      return state;
  }
}

export const LibraryComponent = ({ className }: LibraryComponentProps) => {
  const { savedArtists, savedAlbums, savedTracks } = useSavedItems();
  const [state, dispatch] = useReducer(reducer, {
    trackSimplified: true,
    albumSimplified: true,
    artistSimplified: true,
  });

  const artistsEmpty = savedArtists.length === 0;
  const albumsEmpty = savedAlbums.length === 0;
  const tracksEmpty = savedTracks.length === 0;
  const allEmpty = artistsEmpty && albumsEmpty && tracksEmpty;

  const SimplySwitch = ({ element }: { element: TypeOfElement }) => {
    const checked =
      element === TypeOfElement.ARTIST
        ? state.artistSimplified
        : element === TypeOfElement.ALBUM
        ? state.albumSimplified
        : state.trackSimplified;

    return (
      <div className="flex w-full justify-between items-center">
        <div className="text-2xl font-semibold">{element}</div>
        <div className="flex gap-2 items-center">
          <div>Simplified</div>
          <Switch
            className=" cursor-pointer"
            checked={checked}
            onCheckedChange={(value) => dispatch({ element, value })}
          />
        </div>
      </div>
    );
  };

  if (allEmpty) {
    return (
      <div className={cn("text-xl", className)}>
        Your library is empty. Please add some elements (track, album, artist)
        to see something here.
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-3 h-full">
      <SimplySwitch element={TypeOfElement.ARTIST} />
      {savedArtists.map((artist) => (
        <ArtistCard
          key={artist.idArtist}
          artist={artist}
          simplified={state.artistSimplified}
        />
      ))}

      <SimplySwitch element={TypeOfElement.ALBUM} />
      {savedAlbums.map((album) => {
        const albumTracks = savedTracks.filter(
          (track) => track.idAlbum === album.idAlbum
        );

        return (
          <div key={album.idAlbum} className="flex flex-col gap-3">
            <AlbumCard album={album} simplified={state.albumSimplified} />

            {albumTracks.length > 0 && (
              <div className="flex flex-col gap-3 p-4">
                {albumTracks.map((track) => (
                  <TrackCard
                    key={track.idTrack}
                    track={track}
                    simplified
                    fallBackImage={album.strAlbumThumb ?? undefined}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}

      <SimplySwitch element={TypeOfElement.TRACK} />
      {savedTracks.map((track) => (
        <TrackCard
          key={track.idTrack}
          track={track}
          simplified={state.trackSimplified}
        />
      ))}
    </div>
  );
};
