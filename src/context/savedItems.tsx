import { create } from "zustand"
import type { ArtistEdited, AlbumEdited, TrackEdited } from "@/types/music"

type State = {
  savedArtists: ArtistEdited[]
  savedTracks: TrackEdited[]
  savedAlbums: AlbumEdited[]
}

type Actions = {
  addArtist: (addition: ArtistEdited) => void
  addAlbum: (addition: AlbumEdited) => void
  addTrack: (addition: TrackEdited) => void

  getArtists: () => ArtistEdited[]
  getAlbums: () => AlbumEdited[]
  getTracks: () => TrackEdited[]

  searchArtist: (id: string) => ArtistEdited | undefined
  searchAlbum: (id: string) => AlbumEdited | undefined
  searchTrack: (id: string) => TrackEdited | undefined
}

export const useSavedItems = create<State & Actions>((set, get) => ({
  savedArtists: [],
  savedTracks: [],
  savedAlbums: [],

  addArtist: (addition) =>
    set((state) => {
      if (state.savedArtists.some(a => a.idArtist === addition.idArtist)) return state
      return { savedArtists: [...state.savedArtists, addition] }
    }),

  addAlbum: (addition) =>
    set((state) => {
      if (state.savedAlbums.some(a => a.idAlbum === addition.idAlbum)) return state
      return { savedAlbums: [...state.savedAlbums, addition] }
    }),

  addTrack: (addition) =>
    set((state) => {
      if (state.savedTracks.some(t => t.idTrack === addition.idTrack)) return state
      return { savedTracks: [...state.savedTracks, addition] }
    }),

  getArtists: () => get().savedArtists,
  getAlbums: () => get().savedAlbums,
  getTracks: () => get().savedTracks,

  searchArtist: (id) => get().savedArtists.find((a) => a.idArtist === id),
  searchAlbum: (id) => get().savedAlbums.find((a) => a.idAlbum === id),
  searchTrack: (id) => get().savedTracks.find((t) => t.idTrack === id),
}))