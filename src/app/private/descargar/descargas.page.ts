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
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonSpinner,
  IonNote,
  IonIcon,
} from '@ionic/angular/standalone';
import { DowloadMp3Service } from './services/dowloadMp3.service';
import { ErrorService } from 'src/app/shared/error.service';
import { Download } from './models/download';
import { extractSpotifyTrackId } from './utils/functions';

@Component({
  selector: 'app-eventos',
  templateUrl: './descargas.page.html',
  styleUrls: ['./descargas.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonNote,
    IonSpinner,
    IonButton,
    IonInput,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    ReactiveFormsModule,
  ],
})
export class DescargasPage implements OnInit {
  form!: FormGroup;
  formSpty!: FormGroup;

  showSpinner = signal(false);
  downloadLink = signal<string | null>(null);

  private fb = inject(FormBuilder);
  private downloadSvr = inject(DowloadMp3Service);
  private errorSvr = inject(ErrorService);

  ngOnInit(): void {
    this.form = this.fb.group({
      url: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(http|https):\/\/[^ "]+$/),
      ]),
    });

    this.formSpty = this.fb.group({
      urlSpoty: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(http|https):\/\/[^ "]+$/),
      ]),
    });
  }

  public download(): void {
    this.showSpinner.set(true);
    const data = this.form.getRawValue() as Download;
    this.downloadSvr.downloadYoutubeMp3(data.url as string).subscribe({
      next: (res) => {
        window.open(res.dlink);
      },
      error: () => {
        this.errorSvr.presentAlert();
      },
      complete: () => {
        this.showSpinner.set(false);
      },
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
