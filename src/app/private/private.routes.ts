import { Routes } from '@angular/router';
import { PrivatePage } from './private.page';

export const routes: Routes = [
  {
    path: '',
    component: PrivatePage,
    children: [
      {
        path: 'my-library',
        loadChildren: () =>
          import('./library/library.routes').then((m) => m.routes),
      },
      {
        path: 'download-spoti',
        loadChildren: () =>
          import('./spotify/spotify.routes').then((m) => m.routes),
      },
      {
        path: 'dowload-yt',
        loadChildren: () =>
          import('./youtube/youtube.routes').then((m) => m.routes),
      },
      {
        path: '',
        redirectTo: 'my-library',
        pathMatch: 'full',
      },
    ],
  },
];
