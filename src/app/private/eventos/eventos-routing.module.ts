import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosPage } from './eventos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosPage,
    data: { titleHeader: 'Eventos, conciertos y giras' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosPageRoutingModule {}
