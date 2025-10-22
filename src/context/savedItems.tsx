import { create } from "zustand";
import type { ArtistEdited, AlbumEdited, TrackEdited } from "@/types/music";

type State = {
  savedArtists: ArtistEdited[];
  savedTracks: TrackEdited[];
  savedAlbums: AlbumEdited[];
};

type Actions = {
  addArtist: (addition: ArtistEdited) => Promise<void>;
  addAlbum: (addition: AlbumEdited) => Promise<void>;
  addTrack: (addition: TrackEdited) => Promise<void>;

  deleteArtist: (id: string) => Promise<void>;
  deleteAlbum: (id: string) => Promise<void>;
  deleteTrack: (id: string) => Promise<void>;

  getArtists: () => ArtistEdited[];
  getAlbums: () => AlbumEdited[];
  getTracks: () => TrackEdited[];

  searchArtist: (id: string) => ArtistEdited | undefined;
  searchAlbum: (id: string) => AlbumEdited | undefined;
  searchTrack: (id: string) => TrackEdited | undefined;

  loadUserData: (userId: number) => Promise<void>;
};

export const useSavedItems = create<State & Actions>((set, get) => ({
  savedArtists: [],
  savedTracks: [],
  savedAlbums: [],

  loadUserData: async (userId: Number) => {
    const [artistRes, albumRes, trackRes] = await Promise.all([
      fetch(`/api/artist?userId=${userId}`),
      fetch(`/api/albums?userId=${userId}`),
      fetch(`/api/tracks?userId=${userId}`),
    ]);

    const [artists, albums, tracks] = await Promise.all([
      artistRes.json(),
      albumRes.json(),
      trackRes.json(),
    ]);

    set({
      savedArtists: artists,
      savedAlbums: albums,
      savedTracks: tracks,
    });
  },

  addArtist: async (artist) => {
    set((state) => ({
      savedArtists: [
        ...state.savedArtists.filter((a) => a.idArtist !== artist.idArtist),
        artist,
      ],
    }));
    await fetch("api/elements/artists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artist),
    });
  },

  addAlbum: async (album) => {
    set((state) => ({
      savedAlbums: [
        ...state.savedAlbums.filter((a) => a.idAlbum !== album.idAlbum),
        album,
      ],
    }));
    await fetch("/api/elemsnts/albumsd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(album),
    });
  },

  addTrack: async (track) => {
    set((state) => ({
      savedTracks: [
        ...state.savedTracks.filter((t) => t.idTrack !== track.idTrack),
        track,
      ],
    }));
    await fetch("/api/elements/tracks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(track),
    });
  },

  deleteArtist: async (id) => {
    set((state) => ({
      savedArtists: state.savedArtists.filter((a) => a.idArtist !== id),
    }));
    await fetch(`/api/artists/${id}`, { method: "DELETE" });
  },

  deleteAlbum: async (id) => {
    set((state) => ({
      savedAlbums: state.savedAlbums.filter((a) => a.idAlbum !== id),
    }));
    await fetch(`/api/albums/${id}`, { method: "DELETE" });
  },

  deleteTrack: async (id) => {
    set((state) => ({
      savedTracks: state.savedTracks.filter((t) => t.idTrack !== id),
    }));
    await fetch(`/api/tracks/${id}`, { method: "DELETE" });
  },

  getArtists: () => get().savedArtists,
  getAlbums: () => get().savedAlbums,
  getTracks: () => get().savedTracks,

  searchArtist: (id) => get().savedArtists.find((a) => a.idArtist === id),
  searchAlbum: (id) => get().savedAlbums.find((a) => a.idAlbum === id),
  searchTrack: (id) => get().savedTracks.find((t) => t.idTrack === id),
}));
