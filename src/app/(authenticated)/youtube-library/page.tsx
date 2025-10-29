"use client";
import { AlbumCard } from "@/components/cards/AlbumCard";
import { BaseMediaCard } from "@/components/cards/BaseMediaCard";
import { DefaultFrame } from "@/components/default-frame";
import { YoutubePlaylist, YoutubeTrack } from "@/types/youtube";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const YoutubeLibrary = () => {
  const { data: session } = useSession();

  const [playlists, setPlaylists] = useState<YoutubePlaylist[]>([]);
  const [tracks, setTracks] = useState<YoutubeTrack[]>([]);

  useEffect(() => {
    if (!session?.accessToken) return;

    const fetchPlaylists = async () => {
      const res = await fetch(
        "https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=50",
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );

      const data = await res.json();
      setPlaylists(data.items);
    };

    fetchPlaylists();
  }, [session?.accessToken]);

  useEffect(() => {
    if (!playlists.length || !session?.accessToken) return;

    const fetchTracks = async () => {
      let allTracks: YoutubeTrack[] = [];

      for (const playlist of playlists) {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlist.id}`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        const data = await res.json();
        allTracks = [...allTracks, ...data.items];
      }

      setTracks(allTracks);
    };

    fetchTracks();
  }, [playlists]);

  const tracksByPlaylist = playlists.map((playlist) => ({
    ...playlist,
    tracks: tracks.filter((track) => track.snippet.playlistId === playlist.id),
  }));

  return (
    <DefaultFrame className="flex flex-col gap-4 items-center justify-center p-6">
      {!session?.accessToken ? (
        <div className="text-xl font-bold text-red-400">
          You need to connect your Google account to view this page.
        </div>
      ) : (
        <>
          <div className="text-4xl font-bold">YouTube Library</div>

          <div className="text-sm">
            Playlists loaded: {playlists.length} | Songs loaded: {tracks.length}
          </div>

          <div className="w-full max-w-3xl flex flex-col gap-6 overflow-auto">
            {tracksByPlaylist.map((playlist) => (
              <div
                key={playlist.id}
                className="border rounded-lg p-4"
              >
                <a
                  href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                  target="_blank"
                  className="flex gap-3 items-center hover:opacity-80"
                >
                  <Image
                    src={playlist.snippet.thumbnails.default?.url ?? ""}
                    alt={playlist.snippet.title}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div>
                    <div className="font-semibold">
                      {playlist.snippet.title}
                    </div>
                    <div className="text-xs opacity-60">
                      {playlist.snippet.description}
                    </div>
                  </div>
                </a>

                {/* Tracks inside playlist */}
                <div className="mt-3 flex flex-col gap-2 pl-10">
                  {playlist.tracks.map((track) => (
                    <a
                      key={track.id}
                      href={`https://www.youtube.com/watch?v=${track.snippet.resourceId.videoId}&list=${playlist.id}`}
                      target="_blank"
                      className="flex items-center gap-2 hover:opacity-75"
                    >
                      <Image
                        src={track.snippet.thumbnails.default?.url ?? ""}
                        alt={track.snippet.title}
                        width={48}
                        height={48}
                        className="rounded"
                      />
                      <div>
                        <div className="text-sm">{track.snippet.title}</div>
                        <div className="text-xs opacity-60">
                          {track.snippet.channelTitle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </DefaultFrame>
  );
};

export default YoutubeLibrary;
