import { Component, OnInit, inject, signal } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { ErrorService } from 'src/app/shared/error.service';
import { SpotifyService } from './services/spotify.service';
import { Download } from 'src/app/shared/models/download';
import { extractSpotifyTrackId } from 'src/app/shared/utils/functions';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonContent,
    IonTitle,
    IonInput,
    IonButton,
    IonNote,
    ReactiveFormsModule,
  ],
})
export class SpotifyComponent implements OnInit {
  formSpty!: FormGroup;

  showSpinner = signal(false);
  downloadLink = signal<string | null>(null);

  private fb = inject(FormBuilder);
  private downloadSvr = inject(SpotifyService);
  private errorSvr = inject(ErrorService);

  ngOnInit(): void {
    this.formSpty = this.fb.group({
      urlSpoty: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(http|https):\/\/[^ "]+$/),
      ]),
    });
  }

  public downloadSpoty(): void {
    this.showSpinner.set(true);
    const data = this.formSpty.getRawValue() as Download;
    console.log(data.urlSpoty);
    const songId = extractSpotifyTrackId(data.urlSpoty as string);
    this.downloadSvr.downloadSpoty(songId as string).subscribe({
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
  }
}
