import { Routes } from '@angular/router';
import { ProyectoPage } from './proyecto.page';

export const routes: Routes = [
  {
    path: '',
    component: ProyectoPage,
    data: { titleHeader: 'Detalle proyecto' },
  },
];
