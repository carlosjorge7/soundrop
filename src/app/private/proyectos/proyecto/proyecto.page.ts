import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Proyecto } from '../models/proyectos';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.page.html',
  styleUrls: ['./proyecto.page.scss'],
})
export class ProyectoPage {
  nombreProyecto: string = '';

  selectedSegment = 'concepto';

  constructor(private readonly route: ActivatedRoute) {
    this.getRouteParams();
  }

  public getRouteParams(): void {
    this.route.queryParams.pipe(first()).subscribe((params) => {
      const proyecto = params as Proyecto;
      this.nombreProyecto = proyecto.nombre;
    });
  }
}
