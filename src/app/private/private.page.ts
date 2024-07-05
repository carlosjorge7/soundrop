import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
})
export class PrivatePage {
  titleHeader = '';
  isMobile = false;

  constructor(private router: Router, private platform: Platform) {
    this.isMobile = this.platform.is('android') || this.platform.is('ios');
    //this.isMobile = true;
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
