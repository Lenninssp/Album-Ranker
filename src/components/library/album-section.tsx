import { useSavedItems } from "@/context/savedItems";
import { TypeOfElement } from "@/types/music";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { AlbumCard } from "../cards/AlbumCard";
import { TrackCard } from "../cards/TrackCard";
import { SimplifiedSwitch } from "./simplified-switch";
import { LibrarySectionProps, SimplifiedAction } from "@/types/library-types";

export const AlbumsSection = ({
  selectedFilter,
  selectedFolder,
  simplifiedState,
  dispatch, 
}: LibrarySectionProps & {
  dispatch: (action: SimplifiedAction) => void;
}) => {
  const { savedAlbums, savedTracks } = useSavedItems();

  const filteredAlbums = savedAlbums.filter(
    (album) => (!selectedFilter || album.rating === selectedFilter) && (!selectedFolder || album.tag === selectedFolder)
  );

  

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <SimplifiedSwitch
          element={TypeOfElement.ALBUM}
          state={simplifiedState}
          dispatch={(action) => dispatch(action)}
        />
        <AccordionContent>
          {filteredAlbums.map((album) => {
            const albumTracks = savedTracks.filter(
              (track) => (track.idAlbum === album.idAlbum) && (!selectedFolder || track.tag === selectedFolder)
            );

            return (
              <Accordion
                type="single"
                collapsible
                key={album.idAlbum}
                className="flex flex-col gap-3"
              >
                <AlbumCard
                  album={album}
                  simplified={simplifiedState.albumSimplified}
                />
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex-col items-center cursor-pointer" />
                  <AccordionContent className="border-b">
                    {albumTracks.length > 0 && (
                      <div className="flex flex-col gap-3 px-4">
                        {savedTracks
                          .filter(
                            (track) =>
                              track.idAlbum === album.idAlbum &&
                              (!selectedFilter || track.rating === selectedFilter)
                          )
                          .map((track) => (
                            <TrackCard
                              key={track.idTrack}
                              track={track}
                              simplified
                              fallBackImage={album.strAlbumThumb ?? undefined}
                            />
                          ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};