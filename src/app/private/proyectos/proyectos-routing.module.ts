import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectosPage } from './proyectos.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectosPage,
    data: { titleHeader: 'Proyectos musicales' },
  },
  {
    path: 'proyecto/:id',
    loadChildren: () =>
      import('./proyecto/proyecto.module').then((m) => m.ProyectoPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosPageRoutingModule {}
