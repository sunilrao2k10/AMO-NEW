import { filter } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.scss']
})
export class QuoteRequestComponent implements OnInit {
  quoteRequestForm: FormGroup;
  quoteRequestItem: any = {};
  formControls: any;
  selectedQuoteID = null;
  @Input() quoteRequest: any;
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void{
    this.quoteRequestItem = this.quoteRequest.panel.find((item: { code: string; }) => item.code === 'QR');
    this.initializeForm();
    if (this.quoteRequest && this.quoteRequestItem.formData){
      this.updateFormData(this.quoteRequestItem.formData);
    }
    const quoteState = '/\b(approve|pending|reject)\b/g';
    if (this.quoteRequest.quoteState === 'approve' || this.quoteRequest.quoteState === 'pending' || this.quoteRequest.quoteState === 'reject'){
      this.quoteRequestForm.disable();
    }
  }

  /**
   * Method to define Quote request info form group
   * @method initializeForm
   */
  initializeForm(): void {
    this.quoteRequestForm = this.fb.group({
      requestor: ['', [Validators.required]],
      modelNumber: ['', [Validators.required]],
      engineDate: ['', [Validators.required]],
      typeOfTransaction: ['', [Validators.required]],
      channel: ['', [Validators.required]],
      productLine: ['', [Validators.required]],
      requestorComment: ['', [Validators.required]],
    });
    this.formControls = this.quoteRequestForm.controls;
  }

  updateFormData(value: any): void{
    this.quoteRequestForm.patchValue(value);
  }

  submit(): void{
    console.log(this.quoteRequestForm.value);
    this.quoteRequestForm.disable();
  }
}
