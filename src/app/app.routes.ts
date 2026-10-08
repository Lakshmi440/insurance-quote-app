import { Routes } from '@angular/router';
import { QuoteList } from './quotes/quote-list/quote-list';
import { BopWizard } from './quotes/bop-wizard/bop-wizard';


export const routes: Routes = [
  {
    path: 'quotes',
    component: QuoteList
  },
  {
    path: 'quotes/bop/new',
    component: BopWizard
  },
  {
    path: '',
    redirectTo: 'quotes',
    pathMatch: 'full'
  }
];
