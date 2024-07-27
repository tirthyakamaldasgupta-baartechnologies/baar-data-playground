import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'BAAR data Visualizer',
    loadComponent: () =>
      import('./pages/index/index.component').then((m) => m.IndexComponent),
  },
];
