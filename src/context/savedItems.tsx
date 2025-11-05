import { create } from "zustand";
import type { ArtistEdited, AlbumEdited, TrackEdited } from "@/types/music";

type State = {
  savedArtists: ArtistEdited[];
  savedTracks: TrackEdited[];
  savedAlbums: AlbumEdited[];

  tags: string[];

  subscriptions: string[];
};

type Actions = {
  addArtist: (addition: ArtistEdited, userId: number) => Promise<void>;
  addAlbum: (addition: AlbumEdited, userId: number) => Promise<void>;
  addTrack: (addition: TrackEdited, userId: number) => Promise<void>;

  deleteArtist: (id: string, userId: number) => Promise<void>;
  deleteAlbum: (id: string, userId: number) => Promise<void>;
  deleteTrack: (id: string, userId: number) => Promise<void>;

  getArtists: () => ArtistEdited[];
  getAlbums: () => AlbumEdited[];
  getTracks: () => TrackEdited[];

  searchArtist: (id: string) => ArtistEdited | undefined;
  searchAlbum: (id: string) => AlbumEdited | undefined;
  searchTrack: (id: string) => TrackEdited | undefined;

  loadUserData: (userId: number) => Promise<void>;

  getTags: () => string[];

  getSubscriptions: () => string[];
  addSubscription: (userId: number, creatorId: number) => Promise<void>;
  removeSubscription: (userId: number, creatorId: number) => Promise<void>;
  isSubscribed: (creatorId: string) => boolean;
};

function extractAllTags(state: State) {
  const allTags = [
    ...state.savedArtists.flatMap((item) => item.tag ?? []),
    ...state.savedAlbums.flatMap((item) => item.tag ?? []),
    ...state.savedTracks.flatMap((item) => item.tag ?? []),
  ];

  return [...new Set(allTags)]; // dedupe tags
}

export const useSavedItems = create<State & Actions>((set, get) => ({
  savedArtists: [],
  savedTracks: [],
  savedAlbums: [],
  tags: [],
  subscriptions: [],

  loadUserData: async (userId: Number) => {
    const [artistRes, albumRes, trackRes, subsRes] = await Promise.all([
      fetch(`/api/elements/artists?userId=${userId}`),
      fetch(`/api/elements/albums?userId=${userId}`),
      fetch(`/api/elements/tracks?userId=${userId}`),
      fetch(`/api/community/users/follow/${userId}`),
    ]);

    const [artists, albums, tracks, subsResult] = await Promise.all([
      artistRes.json(),
      albumRes.json(),
      trackRes.json(),
      subsRes.json(),
    ]);

    set((state) => {
      const updatedState = {
        ...state,
        savedArtists: artists,
        savedAlbums: albums,
        savedTracks: tracks,
        subscriptions: subsResult,
      };

      return {
        ...updatedState,
        tags: extractAllTags(updatedState),
      };
    });
  },

  addArtist: async (artist, userId) => {
    set((state) => ({
      savedArtists: [
        ...state.savedArtists.filter((a) => a.idArtist !== artist.idArtist),
        artist,
      ],
    }));
    await fetch("/api/elements/artists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...artist, userId: userId }),
    });
  },

  addAlbum: async (album, userId) => {
    set((state) => ({
      savedAlbums: [
        ...state.savedAlbums.filter((a) => a.idAlbum !== album.idAlbum),
        album,
      ],
    }));
    await fetch("/api/elements/albums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...album, userId: userId }),
    });
  },

  addTrack: async (track, userId) => {
    set((state) => ({
      savedTracks: [
        ...state.savedTracks.filter((t) => t.idTrack !== track.idTrack),
        track,
      ],
    }));
    await fetch("/api/elements/tracks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...track, userId: userId }),
    });
  },

  addSubscription: async (userId: number, creatorId: number) => {
    const creatorIdStr = creatorId.toString();

    set((state) => ({
      subscriptions: [
        ...state.subscriptions.filter((s) => s !== creatorIdStr),
        creatorIdStr,
      ],
    }));

    try {
      const response = await fetch(`/api/community/users/follow/${creatorId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentUserId: userId }),
      });

      if (!response.ok) {
        set((state) => ({
          subscriptions: state.subscriptions.filter((s) => s !== creatorIdStr),
        }));

        const error = await response.json();
        console.error("Error adding subscription:", error);
      }
    } catch (error) {
      set((state) => ({
        subscriptions: state.subscriptions.filter((s) => s !== creatorIdStr),
      }));
      console.error("Error adding subscription:", error);
    }
  },

  deleteArtist: async (id, userId) => {
    set((state) => ({
      savedArtists: state.savedArtists.filter((a) => a.idArtist !== id),
    }));
    await fetch(`/api/elements/artists/${id}?userId=${userId}`, {
      method: "DELETE",
    });
  },

  deleteAlbum: async (id, userId) => {
    set((state) => ({
      savedAlbums: state.savedAlbums.filter((a) => a.idAlbum !== id),
    }));
    await fetch(`/api/elements/albums/${id}?userId=${userId}`, {
      method: "DELETE",
    });
  },

  deleteTrack: async (id, userId) => {
    set((state) => ({
      savedTracks: state.savedTracks.filter((t) => t.idTrack !== id),
    }));
    await fetch(`/api/elements/tracks/${id}?userId=${userId}`, {
      method: "DELETE",
    });
  },

  removeSubscription: async (userId: number, creatorId: number) => {
    const creatorIdStr = creatorId.toString();
    set((state) => ({
      subscriptions: state.subscriptions.filter((s) => s !== creatorIdStr),
    }));

    try {
      const response = await fetch(`/api/community/users/follow/${creatorId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentUserId: userId }),
      });

      if (!response.ok) {
        set((state) => ({
          subscriptions: [...state.subscriptions, creatorIdStr],
        }));

        const error = await response.json();
        console.error("Error removing subscription:", error);
      }
    } catch (error) {
      set((state) => ({
        subscriptions: [...state.subscriptions, creatorIdStr],
      }));
      console.error("Error removing subscription:", error);
    }
  },

  getArtists: () => get().savedArtists,
  getAlbums: () => get().savedAlbums,
  getTracks: () => get().savedTracks,

  searchArtist: (id) => get().savedArtists.find((a) => a.idArtist === id),
  searchAlbum: (id) => get().savedAlbums.find((a) => a.idAlbum === id),
  searchTrack: (id) => get().savedTracks.find((t) => t.idTrack === id),

  getTags: () => get().tags,
  getSubscriptions: () => get().subscriptions,
  isSubscribed: (creatorId: string) => get().subscriptions.includes(creatorId),
}));
