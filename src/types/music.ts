import { Rating } from "./ratingColor";

export interface AlbumResponse {
  album: Album[];
}

export interface Album {
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


export interface AlbumEdited extends Album {
  commentary?: string;
  tag?: string;
  rating?: Rating;
}


export interface TrackResponse {
  track: Track[];
}

export interface Track {
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
}

export interface TrackEdited extends Track {
  commentary?: string;
  tag?: string;
  rating?: Rating;
}


export interface ArtistResponse {
  artists: Artist[];
}

export interface Artist {
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


export interface ArtistEdited extends Artist {
  commentary?: string;
  tag?: string;
  rating?: Rating;
}


export type AudioDBResponse =  
| ({type: "album"} & AlbumResponse) 
| ({type: "track"} & TrackResponse) 
| ({type: "artist"} & ArtistResponse);