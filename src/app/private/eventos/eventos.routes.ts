import { Routes } from '@angular/router';

import { EventosPage } from './eventos.page';

export const routes: Routes = [
  {
    path: '',
    component: EventosPage,
    data: { titleHeader: 'Eventos, conciertos y giras' },
  },
];
