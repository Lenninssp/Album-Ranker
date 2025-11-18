import { Rating } from "@/types/ratingColor";
import { useEffect, useState, useCallback } from "react";

export interface CustomTrack {
  id: number;
  title: string;
  artist?: string;
  album?: string;
  duration?: number;
  genre?: string;
  mood?: string;
  description?: string;
  rating?: number;
  commentary?: string;
  tag?: string;
  public: boolean;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export function useCustomTracks(userId: number) {
  const [tracks, setTracks] = useState<CustomTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTracks = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/custom/tracks/get?userId=${userId}`);
      if (!res.ok) throw new Error("Failed to fetch custom tracks");
      const data = await res.json();
      setTracks(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);


  useEffect(() => {
    fetchTracks();
  }, [fetchTracks]);

  const create = async (trackData: {
    title: string;
    artist?: string;
    album?: string;
    duration?: number;
    genre?: string;
    mood?: string;
    description?: string;
    rating?: Rating;
    commentary?: string;
    tag?: string;
    public?: boolean;
  }) => {
    try {
      const res = await fetch("/api/custom/tracks/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...trackData, userId }),
      });

      if (!res.ok) throw new Error("Failed to create custom track");

      await fetchTracks();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const update = async (trackData: {
    id: number;
    title?: string;
    artist?: string;
    album?: string;
    duration?: number;
    genre?: string;
    mood?: string;
    description?: string;
    rating?: Rating;
    commentary?: string;
    tag?: string;
    public?: boolean;
  }) => {
    try {
      const res = await fetch("/api/custom/tracks/modify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trackData),
      });

      if (!res.ok) throw new Error("Failed to modify custom track");

      await fetchTracks();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const remove = async (id: number) => {
    try {
      const res = await fetch("/api/custom/tracks", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Failed to delete custom track");

      await fetchTracks();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  return {
    tracks,
    loading,
    error,
    refresh: fetchTracks,
    create,
    update,
    remove,
  };
}