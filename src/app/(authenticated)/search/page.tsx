"use client";

import { AlbumCard } from "@/components/cards/AlbumCard";
import { ArtistCard } from "@/components/cards/ArtistCard";
import { TrackCard } from "@/components/cards/TrackCard";
import { DefaultFrame } from "@/components/default-frame";
import { RadioSearch } from "@/components/search/radio-search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MediaCardProvider, Renderer } from "@/context/media-card-context";
import { useSavedItems } from "@/context/savedItems";
import {
  Album,
  AudioDBResponse,
  RawArtist,
  RawTrack,
  Track,
} from "@/types/music";
import { Rating } from "@/types/ratingColor";
import { useEffect, useState } from "react";

export type SearchType = "album" | "track" | "artist";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");
  const [searchType, setSearchType] = useState<SearchType>("album");
  const [result, setResult] = useState<AudioDBResponse | null>(null);
  const [albumTracks, setAlbumTracks] = useState<Track[] | null>(null);
  const [loading, setLoading] = useState(false);

  const [recommendedTrack, setRecommendedTrack] = useState<RawTrack | null>(
    null
  );

  const elements = {
    commentary: "",
    tag: "",
    rating: Rating.Undefined,
    public: false,
    includesMetadata: false,
  };
  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const res = await fetch(
          `https://www.theaudiodb.com/api/v1/json/123/trending.php?country=us&type=itunes&format=singles`
        );
        const data = await res.json();

        if (!data?.trending?.length) return;

        const random =
          data.trending[Math.floor(Math.random() * data.trending.length)];

        if (!random.idTrack) return;

        const trackRes = await fetch(
          `https://www.theaudiodb.com/api/v1/json/123/track.php?h=${random.idTrack}`
        );
        const trackData = await trackRes.json();

        const detailedTrack = trackData?.track?.[0];
        if (!detailedTrack) return;

        setRecommendedTrack(detailedTrack);
      } catch (err) {
        console.error("Recommendation fetch failed:", err);
      }
    };

    fetchRecommendation();
  }, []);

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
      const data = await response.json();

      const typedData = { type: searchType, ...data };
      setResult(typedData);

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

  return (
    <DefaultFrame className="flex w-full gap-8 px-6">
      <MediaCardProvider renderer={Renderer.COMMUNITY}>
        <div className="flex-1 w-full flex flex-col items-center gap-4">
          <div className="text-4xl font-bold">Search for any song or album</div>

          <form
            className="w-full flex gap-4 px-10 items-center justify-center"
            onSubmit={handleExecuteSearch}
          >
            <RadioSearch value={searchType} onValueChange={setSearchType} />
            <Input
              className="font-bold"
              placeholder="Artist name"
              value={loading ? "Loading..." : searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={loading}
            />

            {(searchType === "album" || searchType === "track") && (
              <Input
                className="font-bold"
                placeholder={
                  searchType === "track" ? "Track name" : "Album name"
                }
                value={loading ? "Loading..." : searchQuery2}
                onChange={(e) => setSearchQuery2(e.target.value)}
                disabled={loading}
              />
            )}

            <Button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </Button>
          </form>

          <div className="w-full max-w-6xl overflow-auto">
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
                  {albumTracks &&
                    albumTracks.map((track) => (
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

            {result?.type === "track" &&
              Array.isArray(result.track) &&
              result.track[0] && (
                <TrackCard track={{ ...result.track[0], ...elements }} />
              )}
          </div>
        </div>

        <div className="w-80 min-w-[20rem] border-l pl-6 py-4 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Weekly Recommendation</h2>

          {!recommendedTrack && (
            <p className="text-neutral-400 text-sm">
              Add tracks to your library to receive genre-based recommendations.
            </p>
          )}

          {recommendedTrack && (
            <div>
              <p className="text-neutral-300 text-sm">
                Based on your latest track's genre:{" "}
                <span className="font-bold">{recommendedTrack.strTrack}</span>
              </p>

              <TrackCard
                track={{
                  ...recommendedTrack,
                  ...elements,
                }}
                fallbackImage={recommendedTrack.strTrackThumb ?? ""}
              />
            </div>
          )}
        </div>
      </MediaCardProvider>
    </DefaultFrame>
  );
};

export default Search;
