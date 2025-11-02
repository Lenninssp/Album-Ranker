import { useSavedItems } from "@/context/savedItems";
import { TypeOfElement } from "@/types/music";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "../ui/accordion";
import { TrackCard } from "../cards/TrackCard";
import { LibrarySectionProps, SimplifiedAction, SimplifiedState } from "@/types/library-types";
import { SimplifiedSwitch } from "./simplified-switch";

export const TracksSection = ({
  selectedFilter,
  selectedFolder,
  simplifiedState,
  dispatch,
  state,
}: LibrarySectionProps & {
  dispatch: (action: SimplifiedAction) => void;
  state: SimplifiedState;
}) => {
  const { savedTracks } = useSavedItems();

  const filteredTracks = savedTracks.filter(
    (track) => (!selectedFilter || track.rating === selectedFilter)&& (!selectedFolder || track.tag === selectedFolder)
  );

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-2">
        <SimplifiedSwitch
          element={TypeOfElement.TRACK}
          state={state}
          dispatch={dispatch}
        />
        <AccordionContent className="flex flex-col gap-3">
          {filteredTracks.map((track) => (
            <TrackCard
              key={track.idTrack}
              track={track}
              simplified={simplifiedState.trackSimplified}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};