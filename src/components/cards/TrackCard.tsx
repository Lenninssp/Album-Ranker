// components/cards/TrackCard.tsx
import {  RawTrack, TrackEdited, TypeOfElement, UserMetadata } from "@/types/music";
import { BaseMediaCard } from "./BaseMediaCard";

interface TrackCardProps {
  track: RawTrack | TrackEdited;
}

export const TrackCard = ({ track }: TrackCardProps) => {
  let metadata: UserMetadata | undefined;
  if (track.includesMetadata) {
    metadata = {
      commentary: (track as TrackEdited).commentary,
      tag: (track as TrackEdited).tag,
      rating: (track as TrackEdited).rating
    };
  }
  
  return (
    <BaseMediaCard
      type={TypeOfElement.TRACK}
      element={track}
      headerImage={track.strTrackThumb}
      title={track.strTrack}
      subtitle={track.strAlbum}
      metadata={metadata}
    >
      <div className="text-sm leading-relaxed max-h-44 overflow-auto">
        {track.strDescriptionEN || "No description available."}
      </div>
      <div className="opacity-75">{track.strGenre}</div>
    </BaseMediaCard>
  );
};
