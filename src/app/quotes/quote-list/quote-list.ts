import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote-list',
  imports: [FormsModule],
  styleUrl: './quote-list.css',
  templateUrl: './quote-list.html',
})
export class QuoteList {

  showProductSelection = false;

  selectedProduct = '';

  openAddQuote() {
    this.showProductSelection = true;
  }

  continueQuote() {
    console.log('Selected Product:', this.selectedProduct);
  }
}