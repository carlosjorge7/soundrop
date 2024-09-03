import { Routes } from '@angular/router';
import { SpotifyComponent } from './spotify.component';

export const routes: Routes = [
  {
    path: '',
    component: SpotifyComponent,
    data: { titleHeader: 'Descargar de Spotify' },
  },
];
