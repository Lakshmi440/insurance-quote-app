import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import{MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field';



@Component({
  imports: [MatIconModule, MatButtonModule, MatSelectModule,FormsModule, MatFormFieldModule],
  selector: 'app-quote-list',
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
