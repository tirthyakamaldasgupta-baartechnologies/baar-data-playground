import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'BAAR Data Visualizer',
    loadComponent: () =>
      import('./pages/index/index.component').then((m) => m.IndexComponent),
  },
];
