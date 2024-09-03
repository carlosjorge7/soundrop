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
  IonTitle,
  IonInput,
  IonButton,
  IonSpinner,
} from '@ionic/angular/standalone';
import { ErrorService } from 'src/app/shared/error.service';
import { Download } from 'src/app/shared/models/download';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonButton,
    IonInput,
    IonTitle,
    IonNote,
    IonContent,
    ReactiveFormsModule,
  ],
})
export class YoutubeComponent implements OnInit {
  form!: FormGroup;

  showSpinner = signal(false);
  downloadLink = signal<string | null>(null);

  private fb = inject(FormBuilder);
  private downloadSvr = inject(YoutubeService);
  private errorSvr = inject(ErrorService);

  ngOnInit(): void {
    this.form = this.fb.group({
      url: new FormControl('', [
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
}
