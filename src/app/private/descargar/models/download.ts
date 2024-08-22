export interface Download {
  url?: string;
  urlSpoty?: string;
}

export interface ResponseToutube {
  videoid: string;
  uniqueid: string;
  progress: number;
  status: string;
  dlink: string;
}

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
