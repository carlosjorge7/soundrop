import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle],
})
export class EventosPage {
  constructor() {}
}
