"use client";

import { AlbumCard } from "@/components/cards/AlbumCard";
import { ArtistCard } from "@/components/cards/ArtistCard";
import { TrackCard } from "@/components/cards/TrackCard";
import { DefaultFrame } from "@/components/default-frame";
import { RadioSearch } from "@/components/search/radio-search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MediaCardProvider, Renderer } from "@/context/media-card-context";
import { AlbumEdited } from "@/generated/prisma";
import { Album, AudioDBResponse, Track } from "@/types/music";
import { Rating } from "@/types/ratingColor";
import { useState } from "react";

export type SearchType = "album" | "track" | "artist";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchQuery2, setSearchQuery2] = useState<string>("");
  const [searchType, setSearchType] = useState<SearchType>("album");
  const [result, setResult] = useState<AudioDBResponse | null>(null);
  const [albumTracks, setAlbumTracks] = useState<Track[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleExecuteSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlbumTracks(null);

    try {
      const url =
        searchType === "artist"
          ? `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${searchQuery}`
          : searchType === "album"
          ? `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${searchQuery}&a=${searchQuery2}`
          : `https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=${searchQuery}&t=${searchQuery2}`;

      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const typedData = { type: searchType, ...data };
      setResult(typedData);

      // 🆕 If album search, fetch tracks
      if (searchType === "album" && data.album?.[0]?.idAlbum) {
        const albumId = data.album[0].idAlbum;
        const trackResponse = await fetch(
          `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${albumId}`
        );
        const trackData = await trackResponse.json();
        setAlbumTracks(trackData?.track || []);
      }
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const elements = {
    commentary: "",
    tag: "",
    rating: Rating.Undefined,
    public: false,
    includesMetadata: false,
  };

  return (
    <DefaultFrame className="flex flex-col items-center justify-center gap-4">
      <MediaCardProvider renderer={Renderer.LIBRARY}>
        <div className="flex-1 w-full justify-end flex-col flex">
          <div className="w-full flex items-center flex-col gap-4">
            <div className="text-4xl font-bold">
              Search for any song or album
            </div>

            <form
              className="w-full flex  gap-4 px-10 items-center justify-center"
              onSubmit={handleExecuteSearch}
            >
              <RadioSearch value={searchType} onValueChange={setSearchType} />
              <Input
                className="font-bold"
                placeholder="Artist name"
                value={loading ? "Data is loading" : searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={loading}
              />

              {(searchType === "album" || searchType === "track") && (
                <Input
                  className="font-bold"
                  placeholder={
                    searchType === "track" ? "Track name" : "Album name"
                  }
                  value={loading ? "Data is loading" : searchQuery2}
                  onChange={(e) => setSearchQuery2(e.target.value)}
                  disabled={loading}
                />
              )}
              <Button type="submit" disabled={loading}>
                {loading ? "Searching..." : "Search"}
              </Button>
            </form>
          </div>
        </div>

        <div className="flex-2 w-full max-w-6xl overflow-auto">
          {result?.type === "artist" &&
            Array.isArray(result.artists) &&
            result.artists[0] && (
              <ArtistCard artist={{ ...result.artists[0], ...elements }} />
            )}

          {result?.type === "album" &&
            Array.isArray(result.album) &&
            result.album[0] && (
              <div className="flex flex-col gap-6">
                <AlbumCard album={{ ...result.album[0], ...elements }} />
                {albumTracks && albumTracks.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {albumTracks.map((track) => (
                      <TrackCard
                        key={track.idTrack}
                        track={{ ...track, ...elements }}
                        fallbackImage={
                          result?.album?.[0]?.strAlbum3DThumb ?? undefined
                        }
                        simplified
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

          {/* Track */}
          {result?.type === "track" &&
            Array.isArray(result.track) &&
            result.track[0] && (
              <TrackCard track={{ ...result.track[0], ...elements }} />
            )}
        </div>
      </MediaCardProvider>
    </DefaultFrame>
  );
};

export default Search;
