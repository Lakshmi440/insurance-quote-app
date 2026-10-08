import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-list',
  imports: [FormsModule],
  styleUrl: './quote-list.css',
  templateUrl: './quote-list.html',
})
export class QuoteList {
 showProductSelection = false;

selectedProduct = '';

quotes: any[] = [];
totalQuotes = 0;
completedQuotes = 0;
inProgressQuotes = 0;

constructor(
  private router: Router,
  private quoteService: QuoteService
) {
  this.loadQuotes();
}

loadQuotes() {
  this.quotes = this.quoteService.getQuotes();

  this.totalQuotes = this.quotes.length;

  this.completedQuotes =
    this.quotes.filter(q => q.status === 'Completed').length;

  this.inProgressQuotes =
    this.quotes.filter(q => q.status === 'Incomplete').length;
}

openAddQuote() {
  this.showProductSelection = true;
}

continueQuote() {
  if (this.selectedProduct === 'BOP') {
    //this.showProductSelection = false;
    this.router.navigate(['/quotes/bop/new']);
  }
}
}