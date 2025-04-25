// src/app/app.module.ts

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouteReuseStrategy }               from '@angular/router';
import { IonicModule, IonicRouteStrategy }  from '@ionic/angular';

import { AppComponent }    from './app.component';
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [],            // no components declared here
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutesModule,
    AppComponent               // ← standalone components go here, no '+' prefix
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
