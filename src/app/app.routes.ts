import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'private',
    loadChildren: () =>
      import('./private/private.routes').then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: 'private',
    pathMatch: 'full',
  },
];
