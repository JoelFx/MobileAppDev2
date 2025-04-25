// src/app/app.module.ts

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouteReuseStrategy }               from '@angular/router';
import { IonicModule, IonicRouteStrategy }  from '@ionic/angular';

import { AppComponent }       from './app.component';
import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  declarations: [AppComponent],    // declare AppComponent here
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule              // import routing module
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // allow <ion-*> tags
})
export class AppModule {}
