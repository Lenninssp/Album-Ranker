import { AlbumEdited, AllElements, AllElementsEdited, ArtistEdited, TrackEdited, TypeOfElement, UserMetadata } from "./music";

export interface MediaCardConfig {
  headerImage?: string | null;
  title: string;
  subtitle?: string | null;
  year?: string | number | null;
  description: string;
  genre?: string | null;
}

export function extractMetadata(element: AllElementsEdited): UserMetadata | undefined {
  return {
    commentary: element.commentary,
    tag: element.tag,
    rating: element.rating,
    public: element.public,
  };
}

export function getMediaCardConfig(
  element: AllElementsEdited,
  type: TypeOfElement,
  fallbackImage?: string
): MediaCardConfig {
  const metadata = extractMetadata(element);
  
  let elementTyped;
  switch (type) {
    case TypeOfElement.TRACK:
      elementTyped = (element as TrackEdited)
      return {
        headerImage: elementTyped.strTrackThumb || fallbackImage,
        title: elementTyped.strTrack,
        subtitle: elementTyped.strAlbum,
        description: elementTyped.strDescriptionEN || metadata?.commentary || "No description available.",
        genre: elementTyped.strGenre,
      };
      
    case TypeOfElement.ARTIST:
      elementTyped = (element as ArtistEdited)
      return {
        headerImage: elementTyped.strArtistThumb,
        title: elementTyped.strArtist,
        subtitle: elementTyped.strLabel,
        year: elementTyped.intFormedYear,
        description: elementTyped.strBiographyEN || metadata?.commentary || "No biography available.",
        genre: elementTyped.strGenre,
      };
      
    case TypeOfElement.ALBUM:
      elementTyped = (element as AlbumEdited)
      return {
        headerImage: elementTyped.strAlbumThumb,
        title: elementTyped.strAlbum,
        subtitle: elementTyped.strArtist,
        year: elementTyped.intYearReleased,
        description: elementTyped.strDescriptionEN || metadata?.commentary || "No description available.",
        genre: elementTyped.strGenre,
      };
      
    default:
      throw new Error(`Unknown media type: ${type}`);
  }
}
