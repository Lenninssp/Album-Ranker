import { User } from "@/generated/prisma";
import { AlbumEdited, ArtistEdited, TrackEdited } from "@/types/music";
import { Button } from "../ui/button";
import { Rating } from "@/types/ratingColor";
import { AlbumCard } from "../cards/AlbumCard";
import { TrackCard } from "../cards/TrackCard";
import { ArtistCard } from "../cards/ArtistCard";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSavedItems } from "@/context/savedItems";
import { useSession } from "next-auth/react";

type UserWithMedia = User & {
  albums?: AlbumEdited[];
  tracks?: TrackEdited[];
  artists?: ArtistEdited[];
};

export const UserLib = ({ user }: { user: UserWithMedia }) => {
  const { data: session } = useSession();
  const currentUserId = session?.user?.id; 
  const { getSubscriptions, addSubscription, removeSubscription } = useSavedItems();

  const [subscribed, setSubscribed] = useState<boolean>(false);

  useEffect(() => {
    const existingSubscriptions = getSubscriptions();
    setSubscribed(existingSubscriptions.includes(String(user.id)));
  }, [getSubscriptions, user.id]);

  const handleSubscribe = async () => {
    if (!currentUserId) return;

    if (subscribed) {
      await removeSubscription(currentUserId, user.id);
    } else {
      await addSubscription(currentUserId, user.id);
    }

    setSubscribed(!subscribed);
  };

  return (
    <div key={user.id} className="flex w-full gap-3 items-start p-3">
      {(user.albums?.length !== 0 ||
        user.tracks?.length !== 0 ||
        user.artists?.length !== 0) && (
        <>
          <div className="flex flex-col gap-2">
            <div className="font-bold max-w-48">{user.name}'s liked music:</div>

            <Button
              onClick={handleSubscribe}
              className={cn(
                "bg-black text-white hover:bg-white hover:text-black border",
                subscribed && "bg-white text-black hover:bg-black hover:text-white"
              )}
            >
              {subscribed ? "Unsubscribe" : "Subscribe"}
            </Button>
          </div>

          <div className="flex flex-col max-h-52 overflow-auto w-full gap-3">
            {user.albums
              ?.filter(
                (a) => a.rating === Rating.Adore || a.rating === Rating.Love
              )
              .map((album) => (
                <AlbumCard key={album.idAlbum} album={album} simplified />
              ))}

            {user.tracks
              ?.filter(
                (t) => t.rating === Rating.Adore || t.rating === Rating.Love
              )
              .map((track) => (
                <TrackCard key={track.idTrack} track={track} simplified />
              ))}

            {user.artists?.map((artist) => (
              <ArtistCard key={artist.idArtist} artist={artist} simplified />
            ))}
          </div>
        </>
      )}
    </div>
  );
};