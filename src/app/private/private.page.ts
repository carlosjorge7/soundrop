import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
})
export class PrivatePage {
  titleHeader = '';

  constructor(private router: Router) {
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
