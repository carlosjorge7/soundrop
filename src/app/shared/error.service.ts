import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Ha ocurrido un error. Intentalo de nuevo',
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
