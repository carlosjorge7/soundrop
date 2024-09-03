import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseToutube } from '../models/youtube';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private apiUrl =
    'https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/';
  private apiKey = 'cff3589cb7msh4356e5ee7bf14cdp1a2aecjsne8f75aee4620';
  private apiHost = 'youtube-mp3-downloader2.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  public downloadYoutubeMp3(url: string): Observable<ResponseToutube> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost,
    });
    const options = { headers };
    const requestUrl = `${this.apiUrl}?url=${url}`;
    return this.http.get<ResponseToutube>(requestUrl, options);
  }
}
