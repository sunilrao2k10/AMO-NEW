import { GlobalService } from './../../../global.service';
import { BaseService } from './../../../shared/services/base/base.service';
import { Utility } from './../../../shared/functions/utility';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-quote-issue',
  templateUrl: './quote-issue.component.html',
  styleUrls: ['./quote-issue.component.scss']
})
export class QuoteIssueComponent implements OnInit {
  @Output() formSubmited = new EventEmitter();
  roleName = '';
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
  }

  updateForm(): void{
    this.initializeForm();
    const status = this.quoteIssueUpdated.quoteState;
    if (this.quoteIssueUpdated && !Utility.isEmptyObj(this.quoteIssueUpdated.quoteIssue)){
      this.quoteIssueItem = this.quoteIssueUpdated.quoteIssue;
      this.updateFormData(this.quoteIssueItem);
    }
    if ( status === 'approve' || status === 'reject' || status === 'sendback'){
      this.quoteIssueForm.disable();
    } else {
      this.quoteIssueForm.enable();
      this.quoteIssueForm.reset();
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

  submit(event: any): void{
    const request = {
      role: 'provider',
      quoteID: '1111',
      quoteIssue: this.quoteIssueForm.value
    };
    const value = event.target.value;
    if (value === 'approve') {
      this.baseService.quoteIDDataShiped('approveProvider').subscribe(data => {
        this.formSubmited.emit(data);
      });
    }
    this.modalInputData.title = value;
    this.showModal = true;
    // this.quoteIssueForm.disable();
  }

  quotationDetail(value: string): void{
    this.showModal = true;
    this.modalInputData.title = value;
  }
}
