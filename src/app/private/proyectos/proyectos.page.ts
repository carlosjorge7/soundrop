import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from './models/proyectos';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonIcon,
  ],
})
export class ProyectosPage implements OnInit {
  proyectos: Proyecto[] = [];
  constructor(private readonly router: Router) {
    addIcons({
      logOutOutline,
    });
  }

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
    this.router.navigate(['private/proyecto'], {
      queryParams: proyecto,
    });
  }
}
