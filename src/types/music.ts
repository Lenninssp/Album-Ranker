import { Interaction } from "@/generated/prisma";
import { Rating } from "./ratingColor";

export interface UserMetadata {
  commentary: string;
  tag: string;
  rating: Rating;
  public: boolean;
}

export interface AlbumResponse {
  album: RawAlbum[];
}

export interface TrackResponse {
  track: RawTrack[];
}

export interface ArtistResponse {
  artists: RawArtist[];
}


export interface RawAlbumBase {
  idAlbum: string;
  idArtist: string;
  strAlbum: string;
  strArtist: string;
  intYearReleased: string;
  strGenre: string | null;
  strStyle: string | null;
  strLabel: string | null;
  strReleaseFormat: string | null;
  strAlbumThumb?: string | null;
  strAlbumBack?: string | null;
  strAlbumCDart?: string | null;
  strAlbum3DThumb?: string | null;
  strDescriptionEN?: string | null;
  strMood?: string | null;
  strSpeed?: string | null;
  strWikipediaID?: string | null;
}

export interface RawTrackBase {
  idTrack: string;
  idAlbum: string;
  idArtist: string;
  strTrack: string;
  strAlbum: string;
  strArtist: string;
  strGenre?: string | null;
  strMood?: string | null;
  strStyle?: string | null;
  intDuration?: string | null; 
  strDescriptionEN?: string | null;
  strTrackThumb?: string | null;
  strMusicVid?: string | null;
  strMusicVidDirector?: string | null;
  strMusicVidCompany?: string | null;
  intMusicVidViews?: string | null;
  intMusicVidLikes?: string | null;
  intTrackNumber?: string | null;
}

export interface RawArtistBase {
  idArtist: string;
  strArtist: string;
  strArtistAlternate?: string | null;
  strLabel?: string | null;
  intFormedYear?: string | null;
  strGenre?: string | null;
  strStyle?: string | null;
  strMood?: string | null;
  strCountry?: string | null;
  intMembers?: string | null;
  strWebsite?: string | null;
  strBiographyEN?: string | null;
  strArtistThumb?: string | null;
  strArtistLogo?: string | null;
  strArtistClearart?: string | null;
  strArtistWideThumb?: string | null;
  strArtistFanart?: string | null;
  strArtistBanner?: string | null;
}


export type RawAlbum = RawAlbumBase
export type RawTrack = RawTrackBase
export type RawArtist = RawArtistBase

export type AlbumEdited = RawAlbumBase & UserMetadata
export type TrackEdited = RawTrackBase & UserMetadata
export type ArtistEdited = RawArtistBase & UserMetadata


export type Artist = RawArtist | ArtistEdited;
export type Album = RawAlbum | AlbumEdited;
export type Track = TrackEdited | RawTrack;


export type AllElements = Artist | Album | Track;
export type AllElementsEdited = AlbumEdited | TrackEdited | ArtistEdited;

export type AudioElement = AllElements | AllElementsEdited;


export type AudioDBResponse =
  | ({ type: "album" } & AlbumResponse)
  | ({ type: "track" } & TrackResponse)
  | ({ type: "artist" } & ArtistResponse);

export enum TypeOfElement {
  ALBUM = "album",
  ARTIST = "artist",
  TRACK = "track",
}