"use client";

import { AlbumCard } from "@/components/cards/AlbumCard";
import { ArtistCard } from "@/components/cards/ArtistCard";
import { TrackCard } from "@/components/cards/TrackCard";
import { DefaultFrame } from "@/components/default-frame";
import { RadioSearch } from "@/components/search/radio-search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AudioDBResponse } from "@/types/music";
import { useState } from "react";

export type SearchType = "album" | "track" | "artist";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchQuery2, setSearchQuery2] = useState<string>("");
  const [searchType, setSearchType] = useState<SearchType>("artist");
  const [result, setResult] = useState<AudioDBResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleExecuteSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
      setResult({type: searchType, ...data});
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultFrame className="flex flex-col items-center justify-center gap-4">
      <div className="flex-1 w-full justify-end flex-col flex">
        <div className="w-full flex items-center flex-col gap-4">
          <div className="text-4xl font-bold">Search for any song or album</div>
          <form
            className="w-full flex gap-4 px-10 items-center"
            onSubmit={handleExecuteSearch}
          >
            <RadioSearch value={searchType} onValueChange={setSearchType} />
            <Input
              className="font-bold"
              value={loading ? "Data is loading" : searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={loading}
            />

            {(searchType === "album" || searchType === "track") && (
              <>
              <div className="font-bold flex">Artist|{searchType === "track" ? "Track" : "Album"}</div>
                <Input
                  className="font-bold"
                  value={loading ? "Data is loading" : searchQuery2}
                  onChange={(e) => setSearchQuery2(e.target.value)}
                  disabled={loading}
                />
              </>
            )}
            <Button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </Button>
          </form>
        </div>
      </div>
      <div className="flex-2 w-full max-w-6xl overflow-auto">
        {result?.type === "artist" && <ArtistCard artist={result.artists[0]} />}
        {result?.type === "album" && <AlbumCard album={result.album[0]} />}
        {result?.type === "track" && <TrackCard track={result.track[0]} />}

      </div>
    </DefaultFrame>
  );
};

export default Search;
