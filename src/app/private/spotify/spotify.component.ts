import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonNote,
  IonButton,
  IonInput,
  IonTitle,
  IonSpinner,
  IonIcon,
} from '@ionic/angular/standalone';
import { ErrorService } from 'src/app/shared/error.service';
import { SpotifyService } from './services/spotify.service';
import { Download } from 'src/app/shared/models/download';
import {
  extractPlaylistId,
  extractSpotifyTrackId,
} from 'src/app/shared/utils/functions';
import { Subject, takeUntil } from 'rxjs';
import { ellipsisVertical } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Song } from './models/spotify';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonSpinner,
    IonContent,
    IonTitle,
    IonInput,
    IonButton,
    IonNote,
    ReactiveFormsModule,
  ],
})
export class SpotifyComponent implements OnInit, OnDestroy {
  formSpty!: FormGroup;
  formPlaylist!: FormGroup;

  private destroy$ = new Subject<void>();

  showSpinner = signal(false);
  downloadLink = signal<string | null>(null);

  private fb = inject(FormBuilder);
  private downloadSvr = inject(SpotifyService);
  private errorSvr = inject(ErrorService);

  constructor() {
    addIcons({ ellipsisVertical });
  }

  ngOnInit(): void {
    this.formSpty = this.fb.group({
      urlSpoty: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(http|https):\/\/[^ "]+$/),
      ]),
    });

    this.formPlaylist = this.fb.group({
      urlPlaylistSpoty: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(http|https):\/\/[^ "]+$/),
      ]),
    });
  }

  public downloadPlaylist(): void {
    this.showSpinner.set(true);
    const data = this.formPlaylist.getRawValue() as Download;
    console.log(data);
    const playlistId = extractPlaylistId(data.urlPlaylistSpoty as string);
    this.downloadSvr
      .downloadPlaylist(playlistId as string)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          console.log(res.data.songs);
          const songs = res.data.songs;
          songs.forEach((song: Song) => {
            window.open(song.downloadLink);
          });
        },
        error: () => {
          this.errorSvr.presentAlert();
        },
        complete: () => {
          this.showSpinner.set(false);
        },
      });
    this.formPlaylist.reset();
  }

  public downloadSong(): void {
    this.showSpinner.set(true);
    const data = this.formSpty.getRawValue() as Download;
    console.log(data);
    const songId = extractSpotifyTrackId(data.urlSpoty as string);
    this.downloadSvr
      .downloadSpoty(songId as string)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          window.open(res.data.downloadLink);
        },
        error: () => {
          this.errorSvr.presentAlert();
        },
        complete: () => {
          this.showSpinner.set(false);
        },
      });
    this.formSpty.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // Emitimos un valor para completar el observable
    this.destroy$.complete();
  }
}
