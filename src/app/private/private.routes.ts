import { Routes } from '@angular/router';
import { PrivatePage } from './private.page';

export const routes: Routes = [
  {
    path: '',
    component: PrivatePage,
    children: [
      {
        path: 'proyectos',
        loadChildren: () =>
          import('./proyectos/proyectos.routes').then((m) => m.routes),
      },
      {
        path: 'contactos',
        loadChildren: () =>
          import('./contactos/contactos.routes').then((m) => m.routes),
      },
      {
        path: 'descargar',
        loadChildren: () =>
          import('./descargar/descargas.routes').then((m) => m.routes),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./perfil/perfil.routes').then((m) => m.routes),
      },
      {
        path: '',
        redirectTo: 'proyectos',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'proyecto',
    loadChildren: () =>
      import('./proyectos/proyecto/proyecto.routes').then((m) => m.routes),
  },
];
