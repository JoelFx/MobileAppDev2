// src/main.ts

import { environment } from './environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication }               from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { IonicModule }                        from '@ionic/angular';

import { AppComponent }                       from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot()),
    provideRouter([
      { path: '', redirectTo: 'tabs/home', pathMatch: 'full' },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./app/tabs/tabs.page').then(m => m.TabsPage),
        children: [
          {
            path: 'home',
            loadComponent: () =>
              import('./app/pages/home/home.page').then(m => m.HomePage)
          },
          {
            path: 'maps',
            loadComponent: () =>
              import('./app/pages/maps/maps.page').then(m => m.MapsPage)
          },
          {
            path: 'record',
            loadComponent: () =>
              import('./app/pages/record/record.page').then(m => m.RecordPage)
          },
          {
            path: 'challenges',
            loadComponent: () =>
              import('./app/pages/challenges/challenges.page').then(
                (m) => m.ChallengesPage
              )
          },
          {
            path: 'you',
            loadComponent: () =>
              import('./app/pages/you/you.page').then((m) => m.YouPage)
          }
        ]
      }
    ], withComponentInputBinding())
  ]
}).catch(err => console.error(err));
