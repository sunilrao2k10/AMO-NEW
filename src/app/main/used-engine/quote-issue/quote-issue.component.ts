import { GlobalService } from './../../../global.service';
import { BaseService } from './../../../shared/services/base/base.service';
import { Utility } from './../../../shared/functions/utility';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-quote-issue',
  templateUrl: './quote-issue.component.html',
  styleUrls: ['./quote-issue.component.scss']
})
export class QuoteIssueComponent implements OnInit {
  @Output() formSubmited = new EventEmitter();
  roleName = '';
  providerComment = '';
  quoteIssueItem: any = {};
  modalInputData = {
    title: 'Approve',
    type: 'form'
  };
  showModal = false;
  selectedQuoteID = null;
  quoteIssueForm: FormGroup;
  formControls: any;
  // tslint:disable-next-line:variable-name
  private _quoteIssue: any;
  quoteIssueUpdated: any;
  @Input() get quoteIssue(): any { return this._quoteIssue; }
  set quoteIssue(input: any){
    if (this._quoteIssue !== input) {
      this.quoteIssueUpdated = input;
      this.updateForm();
    }
  }
  constructor(
    private fb: FormBuilder,
    private baseService: BaseService,
    private globalService: GlobalService
    ) { }

  ngOnInit(): void {
    this.globalService.roleDataSource$.subscribe((data: any) => this.roleName = data);
    this.initializeForm();
  }

  updateForm(): void{
    const quoteIssue = this.quoteIssueUpdated.quoteIssue;
    if (!Utility.isEmptyObj(quoteIssue)){
      const status = this.quoteIssueUpdated.quoteState;
      this.quoteIssueItem = this.quoteIssueUpdated.quoteIssue;
      this.updateFormData(this.quoteIssueItem);
      if ( status === 'approve' || status === 'reject' || status === 'sendback'){
        this.quoteIssueForm.disable();
      } else {
        this.quoteIssueForm.enable();
      }
    } else if (this.quoteIssueForm) {
      this.quoteIssueForm.reset();
      this.quoteIssueForm.enable();
    }

  }

  disableForm(): void{
    const control = Object.keys(this.quoteIssueForm.controls);
    for (const item of control){
      this.quoteIssueForm.controls[item].disable();
    }
  }

  enableForm(): void{
    const control = Object.keys(this.quoteIssueForm.controls);
    for (const item of control){
      this.quoteIssueForm.controls[item].enable();
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
    });
    this.formControls = this.quoteIssueForm.controls;
  }

  updateFormData(value: any): void{
    this.quoteIssueForm.patchValue(value);
  }

  resetFormData(): void{
    this.quoteIssueForm.reset();
  }

  submit(comment?: any): void{
    const request = {
      role: this.roleName,
      quoteID: '1111',
      comment: comment || '',
      quoteIssue: this.quoteIssueForm.value
    };
    console.log(request);
    this.baseService.quoteIDDataShiped('approveProvider').subscribe(data => {
      this.formSubmited.emit(data);
    });
    this.quoteIssueForm.disable();
  }

  sendBack(event: any): void{
    const value = event.target.value;
    this.modalInputData.title = value;
    this.showModal =  true ;
  }

  submitSendback(event: any): void{
    this.submit(event);
  }

  quotationDetail(value: string): void{
    this.showModal = true;
    this.modalInputData.title = value;
  }
}
