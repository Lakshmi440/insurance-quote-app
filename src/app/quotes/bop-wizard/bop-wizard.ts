import { Component } from '@angular/core';
import{FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { QuoteService } from '../quote.service';
import{Quote} from '../models/quote';
@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-bop-wizard',
  styleUrl: './bop-wizard.css',
  templateUrl: './bop-wizard.html',
})
export class BopWizard {
    currentStep = 1;
     businessForm: FormGroup;
     locationForm: FormGroup;

  constructor(private fb: FormBuilder,
    private quoteService: QuoteService
  ) {

    this.businessForm = this.fb.group({

      businessName: ['', Validators.required],

      businessType: ['', Validators.required],

      description: ['', Validators.required]

    });
    this.locationForm = this.fb.group({

  address: ['', Validators.required],

  city: ['', Validators.required],

  state: ['', Validators.required],

  zipCode: ['', Validators.required]

});
  }
nextStep() {

  if (this.businessForm.invalid) {

    this.businessForm.markAllAsTouched();

    return;
  }

  this.currentStep++;

}
saveProgress() {

  const quote = {
    businessInformation: this.businessForm.value,
    location: this.locationForm.value,
    currentStep: this.currentStep,
    status: 'Incomplete'
  };

 this.quoteService.saveProgress(quote);

  alert('Quote progress saved successfully.');
}
saveQuote() {
  const quote = {
    id: Date.now(),
    product: 'BOP',
    businessInformation: this.businessForm.value,
    location: this.locationForm.value,
    status: 'Completed'
  };

  this.quoteService.saveQuote(quote);

  window.location.href = '/quotes';
}

}
