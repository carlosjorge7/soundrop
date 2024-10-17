import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePlaylistSpoty, ResponseSongSpoty } from '../models/spotify';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private apiUrlSpoty = 'https://spotify-downloader9.p.rapidapi.com';

  private apiKeySpoty = 'cff3589cb7msh4356e5ee7bf14cdp1a2aecjsne8f75aee4620';
  private apiHostSpoty = 'spotify-downloader9.p.rapidapi.com';

  private headers = new HttpHeaders({
    'x-rapidapi-key': this.apiKeySpoty,
    'x-rapidapi-host': this.apiHostSpoty,
  });

  constructor(private http: HttpClient) {}

  public downloadSpoty(songId: string): Observable<ResponseSongSpoty> {
    const url = `${this.apiUrlSpoty}/downloadSong?songId=${songId}`;
    return this.http.get<ResponseSongSpoty>(url, { headers: this.headers });
  }

  public downloadPlaylist(
    playlistId: string
  ): Observable<ResponsePlaylistSpoty> {
    const url = `${this.apiUrlSpoty}/downloadPlaylist?playlistId=${playlistId}`;
    return this.http.get<ResponsePlaylistSpoty>(url, { headers: this.headers });
  }
}
