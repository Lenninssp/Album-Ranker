import { create } from "zustand";
import type { ArtistEdited, AlbumEdited, TrackEdited } from "@/types/music";

type State = {
  savedArtists: ArtistEdited[];
  savedTracks: TrackEdited[];
  savedAlbums: AlbumEdited[];
};

type Actions = {
  addArtist: (addition: ArtistEdited) => void;
  addAlbum: (addition: AlbumEdited) => void;
  addTrack: (addition: TrackEdited) => void;

  getArtists: () => ArtistEdited[];
  getAlbums: () => AlbumEdited[];
  getTracks: () => TrackEdited[];

  searchArtist: (id: string) => ArtistEdited | undefined;
  searchAlbum: (id: string) => AlbumEdited | undefined;
  searchTrack: (id: string) => TrackEdited | undefined;
};

export const useSavedItems = create<State & Actions>((set, get) => ({
  savedArtists: [],
  savedTracks: [],
  savedAlbums: [],

  addArtist: (addition) =>
    set((state) => ({
      savedArtists: [
        ...state.savedArtists.filter((a) => a.idArtist !== addition.idArtist),
        addition,
      ],
    })),

  addAlbum: (addition) =>
    set((state) => ({
      savedAlbums: [
        ...state.savedAlbums.filter((a) => a.idAlbum !== addition.idAlbum),
        addition,
      ],
    })),

  addTrack: (addition) =>
    set((state) => ({
      savedTracks: [
        ...state.savedTracks.filter((t) => t.idTrack !== addition.idTrack),
        addition,
      ],
    })),
  getArtists: () => get().savedArtists,
  getAlbums: () => get().savedAlbums,
  getTracks: () => get().savedTracks,

  searchArtist: (id) => get().savedArtists.find((a) => a.idArtist === id),
  searchAlbum: (id) => get().savedAlbums.find((a) => a.idAlbum === id),
  searchTrack: (id) => get().savedTracks.find((t) => t.idTrack === id),
}));
