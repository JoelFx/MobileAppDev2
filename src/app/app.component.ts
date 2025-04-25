// src/app/app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule }                   from '@ionic/angular';
import { CommonModule }                  from '@angular/common';
import { RouterModule }                  from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule  // for <ion-router-outlet>
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
})
export class AppComponent {}
