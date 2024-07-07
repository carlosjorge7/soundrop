import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectoPage } from './proyecto.page';
import { ConceptoComponent } from './concepto/concepto.component';
import { LetrasComponent } from './letras/letras.component';
import { PistasComponent } from './pistas/pistas.component';
import { ImagenComponent } from './imagen/imagen.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectoPage,
    data: { titleHeader: 'Detalle proyecto' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectoPageRoutingModule {}
