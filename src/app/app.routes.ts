import { Routes } from '@angular/router';
import { QuoteList } from './quotes/quote-list/quote-list';

export const routes: Routes = [
  {
    path: 'quotes',
    component: QuoteList
  },
  {
    path: '',
    redirectTo: 'quotes',
    pathMatch: 'full'
  }
];
