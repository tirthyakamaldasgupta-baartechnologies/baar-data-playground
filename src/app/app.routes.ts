import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Stringified data util',
    loadComponent: () =>
      import('./pages/index/index.component').then((m) => m.IndexComponent),
  },
];
