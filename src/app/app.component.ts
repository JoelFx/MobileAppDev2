// src/app/app.component.ts

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
