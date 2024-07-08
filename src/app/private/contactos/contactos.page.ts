import { Component } from '@angular/core';
import {
  IonContent,
  IonSearchbar,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonItem,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports: [
    IonItemGroup,
    IonContent,
    IonSearchbar,
    IonItemDivider,
    IonLabel,
    IonItem,
  ],
})
export class ContactosPage {
  constructor() {}
}
