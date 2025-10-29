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

          <div className=" flex w-4xl overflow-auto flex-col gap-3">
            {playlists.map((playlist) => (
              <a href={`https://www.youtube.com/playlist?list=${playlist.id}`} key={playlist.id} className="flex gap-3 items-center">
                <Image
                  src={playlist.snippet.thumbnails.default?.url ?? ""}
                  alt={playlist.snippet.title}
                  height={playlist.snippet.thumbnails.default?.height}
                  width={playlist.snippet.thumbnails.default?.width}
                />
                <div className="flex-col">
                  <div>{playlist.snippet.title}</div>
                  <div>{playlist.snippet.description}</div>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </DefaultFrame>
  );
};

export default YoutubeLibrary;
