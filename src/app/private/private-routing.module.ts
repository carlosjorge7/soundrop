import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivatePage } from './private.page';

const routes: Routes = [
  {
    path: '',
    component: PrivatePage,
    children: [
      {
        path: 'proyectos',
        loadChildren: () =>
          import('./proyectos/proyectos.module').then(
            (m) => m.ProyectosPageModule
          ),
      },
      {
        path: 'contactos',
        loadChildren: () =>
          import('./contactos/contactos.module').then(
            (m) => m.ContactosPageModule
          ),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./perfil/perfil.module').then((m) => m.PerfilPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatePageRoutingModule {}
