import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  nombre: string = 'C3JOTA';
  email: string = 'carlosjorgech7@gmail.com';

  constructor() {}

  editProfile() {
    // Lógica para editar el perfil
    console.log('Edit Profile Clicked');
  }
}
