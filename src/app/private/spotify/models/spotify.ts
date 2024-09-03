export interface ResponseSpoty {
  success: boolean;
  data: {
    id: string;
    artist: string;
    title: string;
    album: string;
    cover: string;
    releaseDate: string;
    downloadLink: string;
  };
  generatedTimeStamp: number;
}
