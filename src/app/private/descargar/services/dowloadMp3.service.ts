import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseSpoty, ResponseToutube } from '../models/download';

@Injectable({
  providedIn: 'root',
})
export class DowloadMp3Service {
  private apiUrl =
    'https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/';
  private apiKey = 'cff3589cb7msh4356e5ee7bf14cdp1a2aecjsne8f75aee4620';
  private apiHost = 'youtube-mp3-downloader2.p.rapidapi.com';

  private apiUrlSpoty =
    'https://spotify-downloader9.p.rapidapi.com/downloadSong';
  private apiKeySpoty = 'cff3589cb7msh4356e5ee7bf14cdp1a2aecjsne8f75aee4620';
  private apiHostSpoty = 'spotify-downloader9.p.rapidapi.com';

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

  public downloadSpoty(songId: string): Observable<ResponseSpoty> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKeySpoty,
      'x-rapidapi-host': this.apiHostSpoty,
    });
    const url = `${this.apiUrlSpoty}?songId=${songId}`;
    return this.http.get<ResponseSpoty>(url, { headers });
  }
}
