import { Component } from '@angular/core';
import {
  ActivationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { filter } from 'rxjs';
import {
  IonHeader,
  IonLabel,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonIcon,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  earthOutline,
  timeOutline,
  personOutline,
  musicalNotesOutline,
  cloudDownloadOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonLabel,
    IonToolbar,
    IonTitle,
    IonContent,
    IonTabBar,
    IonTabs,
    IonTabButton,
    IonIcon,
    IonRouterLink,
    RouterLink,
    RouterLinkActive,
  ],
})
export class PrivatePage {
  titleHeader = '';

  constructor(private router: Router) {
    addIcons({
      earthOutline,
      musicalNotesOutline,
      timeOutline,
      personOutline,
      cloudDownloadOutline,
    });
    this.getRouterEvents();
  }

  private getRouterEvents(): void {
    this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .subscribe((data: any) => {
        this.setPropertiesHeader(data);
      });
  }

  public setPropertiesHeader(data: any): void {
    if (data.snapshot.data.titleHeader !== undefined) {
      this.titleHeader = data.snapshot.data.titleHeader;
    }
  }
}
