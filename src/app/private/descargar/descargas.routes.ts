import { Routes } from '@angular/router';

import { DescargasPage } from './descargas.page';

export const routes: Routes = [
  {
    path: '',
    component: DescargasPage,
    data: { titleHeader: 'Descargar música' },
  },
];
