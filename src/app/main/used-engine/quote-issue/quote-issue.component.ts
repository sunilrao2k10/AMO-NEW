import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-quote-issue',
  templateUrl: './quote-issue.component.html',
  styleUrls: ['./quote-issue.component.scss']
})
export class QuoteIssueComponent implements OnInit {
  @Input() quoteIssue: any;
  quoteIssueItem: any = {};
  modalInputData = {
    title: 'Approve',
    type: 'form'
  };
  showModal = false;
  selectedQuoteID = null;
  quoteIssueForm: FormGroup;
  formControls: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.quoteIssueItem = this.quoteIssue.panel.find((item: { code: string; }) => item.code === 'QI');
    this.initializeForm();
    if (this.quoteIssue && this.quoteIssueItem.formData){
      this.updateFormData(this.quoteIssueItem.formData);
    }
    if (this.quoteIssue.quoteState === 'approve' || this.quoteIssue.quoteState === 'reject'){
      this.quoteIssueForm.disable();
    }
  }

  /**
   * Method to define Quote request info form group
   * @method initializeForm
   */
   initializeForm(): void {
    this.quoteIssueForm = this.fb.group({
      requestor: ['', [Validators.required]],
      modelNumber: ['', [Validators.required]],
      engineDate: ['', [Validators.required]],
      typeOfTransaction: ['', [Validators.required]],
      channel: ['', [Validators.required]],
      productLine: ['', [Validators.required]],
      requestorComment: ['', [Validators.required]],
      providerComment: [{value: '', disabled: true}]
    });
    this.formControls = this.quoteIssueForm.controls;
  }

  updateFormData(value: any): void{
    this.quoteIssueForm.patchValue(value);
  }

  submit(event: any): void{
    const value = event.target.value;
    this.modalInputData.title = value;
    this.showModal = true;
  }

  quotationDetail(value: string): void{
    this.showModal = true;
    this.modalInputData.title = value;
  }
}
