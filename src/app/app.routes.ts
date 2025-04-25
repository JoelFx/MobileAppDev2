import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'maps',
    loadComponent: () => import('./pages/maps/maps.page').then( m => m.MapsPage)
  },
  {
    path: 'record',
    loadComponent: () => import('./pages/record/record.page').then( m => m.RecordPage)
  },
  {
    path: 'challenges',
    loadComponent: () => import('./pages/challenges/challenges.page').then( m => m.ChallengesPage)
  },
  {
    path: 'you',
    loadComponent: () => import('./pages/you/you.page').then( m => m.YouPage)
  },
];
