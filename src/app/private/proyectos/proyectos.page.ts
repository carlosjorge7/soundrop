import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from './models/proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit {
  proyectos: Proyecto[] = [];
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.proyectos = [
      {
        id: '1',
        nombre: 'Proyecto 1',
      },
      {
        id: '2',
        nombre: 'Proyecto 2',
      },
      {
        id: '1',
        nombre: 'Proyecto 3',
      },
    ];
  }

  public goProyecto(proyecto: Proyecto): void {
    this.router.navigate(['private/proyectos/proyecto'], {
      queryParams: proyecto,
    });
  }
}
