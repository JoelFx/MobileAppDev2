// src/app/app.module.ts

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule }    from '@angular/router';
import { IonicModule, IonicRouteStrategy }     from '@ionic/angular';

import { AppComponent }    from './app.component';
import { routes }          from './app.routes';  // your exported routes

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes)              // ← wire in your routes here
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]           // ← so <ion-*> tags work everywhere
})
export class AppModule {}
