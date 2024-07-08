import { Routes } from '@angular/router';

import { ContactosPage } from './contactos.page';

export const routes: Routes = [
  {
    path: '',
    component: ContactosPage,
    data: { titleHeader: 'Contactos y colaboraciones' },
  },
];
