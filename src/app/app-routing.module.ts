// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'maps',
        loadComponent: () =>
          import('./pages/maps/maps.page').then(m => m.MapsPage)
      },
      {
        path: 'record',
        loadComponent: () =>
          import('./pages/record/record.page').then(m => m.RecordPage)
      },
      {
        path: 'challenges',
        loadComponent: () =>
          import('./pages/challenges/challenges.page').then(m => m.ChallengesPage)
      },
      {
        path: 'you',
        loadComponent: () =>
          import('./pages/you/you.page').then(m => m.YouPage)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
