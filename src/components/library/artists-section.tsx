import { useSavedItems } from "@/context/savedItems";
import { TypeOfElement } from "@/types/music";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "../ui/accordion";
import { ArtistCard } from "../cards/ArtistCard";
import { SimplifiedSwitch } from "./simplified-switch";
import { LibrarySectionProps, SimplifiedAction, SimplifiedState } from "@/types/library-types";

export const ArtistsSection = ({
  selectedFilter,
  selectedFolder,
  simplifiedState,
  dispatch,
  state,
}: LibrarySectionProps & {
  dispatch: (action: SimplifiedAction) => void;
  state: SimplifiedState;
}) => {
  const { savedArtists } = useSavedItems();

  const filteredArtists = savedArtists.filter(
    (artist) => (!selectedFilter || artist.rating === selectedFilter) && (!selectedFolder || artist.tag === selectedFolder)
  );

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-3">
        <SimplifiedSwitch
          element={TypeOfElement.ARTIST}
          state={state}
          dispatch={dispatch}
        />
        <AccordionContent className="flex flex-col gap-3">
          {filteredArtists.map((artist) => (
            <ArtistCard
              key={artist.idArtist}
              artist={artist}
              simplified={simplifiedState.artistSimplified}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};