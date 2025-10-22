import { Rating } from "./ratingColor";

export interface UserMetadata {
  commentary: string;
  tag: string;
  rating: Rating;
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


export interface RawAlbum {
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
  includesMetadata?: false; 
}

export interface RawTrack {
  idTrack: string;
  idAlbum: string;
  idArtist: string;
  strTrack: string;
  strAlbum: string;
  strArtist: string;
  strGenre?: string | null;
  strMood?: string | null;
  strStyle?: string | null;
  intDuration?: string | null; // in milliseconds
  strDescriptionEN?: string | null;
  strTrackThumb?: string | null;
  strMusicVid?: string | null;
  strMusicVidDirector?: string | null;
  strMusicVidCompany?: string | null;
  intMusicVidViews?: string | null;
  intMusicVidLikes?: string | null;
  intTrackNumber?: string | null;
  includesMetadata?: false; // The discriminant
}

export interface RawArtist {
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
  includesMetadata?: false; 
}



export type AlbumEdited = RawAlbum & UserMetadata & {
  includesMetadata?: true;
};

export type TrackEdited = RawTrack & UserMetadata & {
  includesMetadata?: true;
};

export type ArtistEdited = RawArtist & UserMetadata & {
  includesMetadata?: true;
};

export type AllElements = RawAlbum | RawTrack | RawArtist;
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