"use client";

import { DefaultFrame } from "@/components/default-frame";
import { RadioSearch } from "@/components/search/radio-search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<"album" | "track" | "artist">("album");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleExecuteSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${searchQuery}`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setResult(data);
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
            <RadioSearch />
            <Input
              className="font-bold"
              value={loading ? "Data is loading" : searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={loading}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </Button>
          </form>
        </div>
      </div>
      <div className="flex-2 w-full max-w-6xl overflow-auto">
        {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      </div>
    </DefaultFrame>
  );
};

export default Search;
