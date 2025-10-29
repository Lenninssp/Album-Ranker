export type YoutubeThumbnail = {
  url: string;
  width: number;
  height: number;
};

export type YoutubePlaylist = {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    channelTitle: string;
    thumbnails: {
      default?: YoutubeThumbnail;
      medium?: YoutubeThumbnail;
      high?: YoutubeThumbnail;
    };
  };
};


export type YoutubeTrack = {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    channelId: string;
    channelTitle: string;
    thumbnails: {
      default?: YoutubeThumbnail;
      medium?: YoutubeThumbnail;
      high?: YoutubeThumbnail;
    };
    resourceId: {
      videoId: string;
    };
  };
};


export type NormalizedTrack = {
  videoId: string;
  title: string;
  artist: string;
  thumbnail: string | null;
};