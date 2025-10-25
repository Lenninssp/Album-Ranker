// components/cards/TrackCard.tsx
import {  RawTrack, Track, TrackEdited, TypeOfElement, UserMetadata } from "@/types/music";
import { BaseMediaCard } from "./BaseMediaCard";
import { cn } from "@/lib/utils";

interface TrackCardProps {
  track: Track;
  fallBackImage?: string;
  simplified?: boolean;
}

export const TrackCard = ({ track, simplified, fallBackImage }: TrackCardProps) => {
  let metadata: UserMetadata | undefined;
  if (track.includesMetadata) {
    metadata = {
      commentary: track.commentary,
      tag: track.tag,
      rating: track.rating
    };
  }
  
  return (
    <BaseMediaCard
      type={TypeOfElement.TRACK}
      element={track}
      headerImage={track.strTrackThumb || fallBackImage }
      title={track.strTrack}
      subtitle={track.strAlbum}
      metadata={metadata}
      simplified={simplified}
    >
      <div className={cn("text-sm leading-relaxed max-h-44 overflow-auto", simplified && "max-h-28")}>
        {track.strDescriptionEN ||  track.includesMetadata && track.commentary  || "No description available."}
      </div>
      <div className="opacity-75">{track.strGenre}</div>
    </BaseMediaCard>
  );
};
