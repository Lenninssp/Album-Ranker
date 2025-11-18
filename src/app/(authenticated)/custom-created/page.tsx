"use client";
import { TrackCard } from "@/components/cards/TrackCard";
import { DefaultFrame } from "@/components/default-frame";
import { LibraryFilter } from "@/components/library/library-filter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MediaCardProvider, Renderer } from "@/context/media-card-context";
import { useCustomTracks } from "@/hooks/useCustomTracks";
import { TypeOfElement } from "@/types/music";
import { Rating } from "@/types/ratingColor";
import { useSession } from "next-auth/react";
import { useState } from "react";

export const CustomCreatedPage = () => {
  const { data: session } = useSession();
  const myUserId = Number(session?.user?.id);

  const { tracks, loading, error, create, update, remove } = useCustomTracks(
    myUserId || 0
  );

  const [createSelected, setCreateSelected] = useState(false);

  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [commentary, setCommentary] = useState("");
  const [rating, setRating] = useState<Rating | null>(Rating.Neutral);

  const fakeTrack = {
    idTrack: "",
    idAlbum: "",
    idArtist: "",
    strAlbum: "",
    tag: "",
  };

  const handleCreate = async () => {
    if (!name.trim()) return;

    try {
      await create({
        title: name,
        artist: artist || undefined,
        commentary,
        rating: rating ?? Rating.Neutral,
        tag: "",
      });

      setName("");
      setArtist("");
      setCommentary("");
      setRating(Rating.Neutral);

      setCreateSelected(false);
    } catch (err) {
      console.error("Failed to create track:", err);
    }
  };

  return (
    <DefaultFrame className="flex items-center justify-center flex-col gap-3 px-4 py-6">
      <div className="text-xl font-semibold">Custom created tracks</div>

      <div className="flex items-center gap-3">
        <span>Create new</span>
        <Switch checked={createSelected} onCheckedChange={setCreateSelected} />
      </div>

      {createSelected ? (
        <div className="w-full max-w-md flex flex-col gap-3 border p-4 rounded-lg bg-white">
          <Input
            placeholder="Track name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />

          <Input
            placeholder="Commentary"
            value={commentary}
            onChange={(e) => setCommentary(e.target.value)}
          />

          <LibraryFilter selectedFilter={rating} onFilterChange={setRating} />

          <Button
            onClick={handleCreate}
            disabled={!name.trim()}
            className="mt-2"
          >
            Save track
          </Button>
        </div>
      ) : (
        <MediaCardProvider renderer={Renderer.LIBRARY}>
          <div className="flex flex-col gap-4 w-full">
            {tracks.length === 0 && (
              <div className="text-neutral-400 mt-3">No custom tracks yet.</div>
            )}

            {tracks.map((track) => (
              <TrackCard
                key={track.id}
                simplified={false}
                track={{
                  ...track,
                  ...fakeTrack,
                  commentary: track.commentary ?? "",
                  strArtist: track.artist ?? "",
                  strTrack: track.title ?? "",
                  rating: track.rating
                }}
              />
            ))}
          </div>
        </MediaCardProvider>
      )}
    </DefaultFrame>
  );
};

export default CustomCreatedPage;
