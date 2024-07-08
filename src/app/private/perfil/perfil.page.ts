import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonAvatar,
  IonButton,
  IonList,
  IonIcon,
  IonLabel,
  IonItem,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  settingsOutline,
  documentTextOutline,
  helpCircleOutline,
  logOutOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonAvatar,
    IonButton,
    IonList,
    IonIcon,
    IonLabel,
    IonItem,
  ],
})
export class PerfilPage {
  nombre: string = 'C3JOTA';
  email: string = 'carlosjorgech7@gmail.com';

  constructor() {
    addIcons({
      settingsOutline,
      documentTextOutline,
      helpCircleOutline,
      logOutOutline,
    });
  }

  editProfile() {
    // Lógica para editar el perfil
    console.log('Edit Profile Clicked');
  }
}
