import { Routes } from '@angular/router';
import { YoutubeComponent } from './youtube.component';

export const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent,
    data: { titleHeader: 'Descargar de Youtube' },
  },
];
