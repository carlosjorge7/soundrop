import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
    data: { titleHeader: 'Perfil músico/banda' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
