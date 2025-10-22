import { Album, Artist, Track } from "@/types/music";
import { create } from "zustand";

type State = {
  savedArtists: Artist[];
  savedTracks: Track[];
  savedAlbums: Album[];
};

type Actions = {
  addArtist: (addition: Artist) => void;
  addAlbum: (addition: Album) => void;
  addTrack: (addition: Track) => void;

  getArtists: () => Artist[];
  getAlbums: () => Album[];
  getTracks: () => Track[];

  searchArtist: (id: string) => Artist | undefined;
  searchAlbum: (id: string) => Album | undefined;
  searchTrack: (id: string) => Track | undefined;
};

export const useSavedItems = create<State & Actions>((set, get) => ({
  savedArtists: [],
  savedTracks: [],
  savedAlbums: [],

  addArtist: (addition) =>
    set((state) => ({
      savedArtists: [...state.savedArtists, addition],
    })),
  addAlbum: (addition) =>
    set((state) => ({ savedAlbums: [...state.savedAlbums, addition] })),
  addTrack: (addition) =>
    set((state) => ({ savedTracks: [...state.savedTracks, addition] })),

  getArtists: () => get().savedArtists,
  getAlbums: () => get().savedAlbums,
  getTracks: () => get().savedTracks,

  searchArtist: (id: string) => get().savedArtists.find((a) => a.idArtist === id),
  searchAlbum: (id: string) => get().savedAlbums.find((a) => a.idAlbum === id),
  searchTrack: (id: string) => get().savedTracks.find((a) => a.idTrack === id),

  

}));
