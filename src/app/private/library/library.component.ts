import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonNote,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  standalone: true,
  imports: [
    IonNote,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCol,
    IonRow,
    IonGrid,
    IonCard,
    IonContent,
    RouterLink,
  ],
})
export class LibraryComponent {}
