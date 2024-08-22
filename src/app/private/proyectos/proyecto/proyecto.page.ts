import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { first } from 'rxjs';
import { Proyecto } from '../models/proyectos';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonTitle,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/angular/standalone';
import { ConceptoComponent } from './concepto/concepto.component';
import { ImagenComponent } from './imagen/imagen.component';
import { LetrasComponent } from './letras/letras.component';
import { NotasComponent } from './notas/notas.component';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.page.html',
  styleUrls: ['./proyecto.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonIcon,
    IonTitle,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    ConceptoComponent,
    ImagenComponent,
    LetrasComponent,
    NotasComponent,
    RouterLink,
  ],
})
export class ProyectoPage {
  nombreProyecto: string = '';

  selectedSegment = 'concepto';

  constructor(private readonly route: ActivatedRoute) {
    addIcons({
      arrowBackOutline,
    });
    this.getRouteParams();
  }

  public getRouteParams(): void {
    this.route.queryParams.pipe(first()).subscribe((params) => {
      const proyecto = params as Proyecto;
      this.nombreProyecto = proyecto.nombre;
    });
  }

  change($e: CustomEvent): void {
    this.selectedSegment = $e.detail.value;
  }
}
