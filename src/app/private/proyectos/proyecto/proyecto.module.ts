import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectoPageRoutingModule } from './proyecto-routing.module';

import { ProyectoPage } from './proyecto.page';
import { ConceptoComponent } from './concepto/concepto.component';
import { ImagenComponent } from './imagen/imagen.component';
import { LetrasComponent } from './letras/letras.component';
import { NotasComponent } from './notas/notas.component';
import { PistasComponent } from './pistas/pistas.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProyectoPageRoutingModule],
  declarations: [
    ProyectoPage,
    ConceptoComponent,
    ImagenComponent,
    LetrasComponent,
    NotasComponent,
    PistasComponent,
  ],
})
export class ProyectoPageModule {}
