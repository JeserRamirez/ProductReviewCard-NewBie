import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product-review',
    loadComponent: () => import('./product-review/product-review.component'),
  },
  {
    path: '**',
    redirectTo: 'product-review',
    pathMatch: 'full',
  },
];
