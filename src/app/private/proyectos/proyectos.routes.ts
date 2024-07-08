import { Routes } from '@angular/router';

import { ProyectosPage } from './proyectos.page';

export const routes: Routes = [
  {
    path: '',
    component: ProyectosPage,
    data: { titleHeader: 'Proyectos musicales' },
  },
];
