export interface Song {
  id: string;
  artist: string;
  title: string;
  album: string;
  cover: string;
  releaseDate: string;
  downloadLink: string;
}

export interface ResponseSongSpoty {
  success: boolean;
  data: Song;
  generatedTimeStamp: number;
}

export interface ResponsePlaylistSpoty {
  success: boolean;
  data: {
    playlistDetails: {
      artist: string;
      title: string;
      cover: string;
      releaseDate: null;
    };
    count: number;
    songs: Song[];
  };
  generatedTimeStamp: number;
}
