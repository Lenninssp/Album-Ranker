import { Track, TrackEdited, TypeOfElement } from "@/types/music";
import { MediaCard } from "./MediaCard";


interface TrackCardProps {
  track: TrackEdited;
  fallbackImage?: string;
  simplified?: boolean;
}

export const TrackCard = ({ track, simplified, fallbackImage }: TrackCardProps) => {
  return (
    <MediaCard
      type={TypeOfElement.TRACK}
      element={track}
      simplified={simplified}
      fallbackImage={fallbackImage}
    />
  );
};
