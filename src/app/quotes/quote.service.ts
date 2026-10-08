import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
     saveProgress(quote: any) {
    localStorage.setItem(
      'bopQuote',
      JSON.stringify(quote)
    );
  }
  saveQuote(quote: any) {
    const quotes = this.getQuotes();

    quotes.push(quote);

    localStorage.setItem(
      'quotes',
      JSON.stringify(quotes)
    );

    localStorage.removeItem('bopQuote');
  }

  getQuotes(): any[] {
    return JSON.parse(
      localStorage.getItem('quotes') || '[]'
    );

}
}
