import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectosPage } from './proyectos.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectosPage,
    data: { titleHeader: 'Proyectos musicales' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosPageRoutingModule {}
