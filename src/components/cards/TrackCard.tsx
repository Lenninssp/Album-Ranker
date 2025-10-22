// components/cards/TrackCard.tsx
import { Track, TypeOfElement } from "@/types/music";
import { BaseMediaCard } from "./BaseMediaCard";

interface TrackCardProps {
  track: Track;
}

export const TrackCard = ({ track }: TrackCardProps) => {
  return (
    <BaseMediaCard
      type={TypeOfElement.TRACK}
      element={track}
      headerImage={track.strTrackThumb}
      title={track.strTrack}
      subtitle={track.strAlbum}
    >
      <div className="text-sm leading-relaxed max-h-44 overflow-auto">
        {track.strDescriptionEN || "No description available."}
      </div>
      <div className="opacity-75">{track.strGenre}</div>
    </BaseMediaCard>
  );
};
