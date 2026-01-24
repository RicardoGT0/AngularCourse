import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./Gift/pages/dashboard-page/dashboard-page.component')
  },
  {
    path: 'trending',
    loadComponent: () => import('./Gift/pages/trending-page/trending-page.component')
  },
  {
    path: 'search',
    loadComponent: () => import('./Gift/pages/search-page/search-page.component')
  },
  {
    path:'**',
    redirectTo: 'dashboard'
  }
];
