"use client";
import { AlbumCard } from "@/components/cards/AlbumCard";
import { ArtistCard } from "@/components/cards/ArtistCard";
import { TrackCard } from "@/components/cards/TrackCard";
import { DefaultFrame } from "@/components/default-frame";
import { User } from "@/generated/prisma";
import { AlbumEdited, ArtistEdited, TrackEdited } from "@/types/music";
import { Rating } from "@/types/ratingColor";
import { useEffect, useState } from "react";

type UserWithMedia = User & {
  albums?: AlbumEdited[];
  tracks?: TrackEdited[];
  artists?: ArtistEdited[];
};

const CommunityPage = () => {
  const [userList, setUserList] = useState<UserWithMedia[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleGetUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/community/users");
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const users: User[] = await response.json();

      const usersWithMedia = await Promise.all(
        users.map(async (user) => {
          const [artistRes, albumRes, trackRes] = await Promise.all([
            fetch(`/api/elements/artists?userId=${user.id}`),
            fetch(`/api/elements/albums?userId=${user.id}`),
            fetch(`/api/elements/tracks?userId=${user.id}`),
          ]);

          const [artists, albums, tracks] = await Promise.all([
            artistRes.json(),
            albumRes.json(),
            trackRes.json(),
          ]);

          return { ...user, tracks, artists, albums };
        })
      );

      setUserList(usersWithMedia);
    } catch (error) {
      console.error("Failed to load user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <DefaultFrame className="flex items-center justify-center flex-col gap-3">
      <div className="font-bold text-4xl">Community rankings</div>

      {loading && <div>Loading community data...</div>}

      <div className="overflow-auto w-full">
        {userList.map((user) => (
          <div key={user.id} className="flex w-full gap-3 items-start p-3">
            {(user.albums?.length !== 0 ||
              user.tracks?.length !== 0 ||
              user.artists?.length !== 0) && (
              <>
                <div className="font-bold max-w-48">
                  {user.name}'s liked music:
                </div>

                <div className="flex flex-col max-h-52 overflow-auto w-full gap-3">
                  {user.albums
                    ?.filter(
                      (a) =>
                        a.rating === Rating.Adore || a.rating === Rating.Love
                    )
                    .map((album) => (
                      <AlbumCard key={album.idAlbum} album={album} simplified />
                    ))}

                  {user.tracks
                    ?.filter(
                      (t) =>
                        t.rating === Rating.Adore || t.rating === Rating.Love
                    )
                    .map((track) => (
                      <TrackCard key={track.idTrack} track={track} simplified />
                    ))}

                  {user.artists?.map((artist) => (
                    <ArtistCard
                      key={artist.idArtist}
                      artist={artist}
                      simplified
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </DefaultFrame>
  );
};

export default CommunityPage;
