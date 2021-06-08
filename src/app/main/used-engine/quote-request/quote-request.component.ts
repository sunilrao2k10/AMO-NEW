
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/global.service';
import { Utility } from 'src/app/shared/functions/utility';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.scss']
})
export class QuoteRequestComponent implements OnInit {
  roleName = '';
  quoteRequestForm: FormGroup;
  quoteRequestItem: any = {};
  formControls: any;
  selectedQuoteID = null;
  // tslint:disable-next-line:variable-name
  private _quoteRequest: any;
  quoteRequestUpdated: any;
  @Input() get quoteRequest(): any { return this._quoteRequest; }
  set quoteRequest(input: any){
    if (this._quoteRequest !== input) {
      this.quoteRequestUpdated = input;
      this.updateForm();
    }
  }
  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    ){}

  ngOnInit(): void{
    this.globalService.roleDataSource$.subscribe((data: any) => this.roleName = data);
  }

  /**
   * Method to update value quote request form
   * @method updateForm
   */
  updateForm(): void{
    this.initializeForm();
    const status = this.quoteRequestUpdated.quoteState;
    if (this.quoteRequestUpdated && !Utility.isEmptyObj(this.quoteRequestUpdated.quoteRequest)){
      this.quoteRequestItem = this.quoteRequestUpdated.quoteRequest;
      this.updateFormData(this.quoteRequestItem);
    }
    if (this.quoteRequestUpdated.role === 'provider'){
      this.quoteRequestForm.disable();
    } else if ( status === 'approve' || status === 'pending' || status === 'reject'){
      this.quoteRequestForm.disable();
    } else {
      this.quoteRequestForm.enable();
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

  resetFormData(): void{
    this.quoteRequestForm.reset();
  }

  submit(): void{
    const request = {
      role: this.roleName,
      quoteRequest: this.quoteRequestForm.value,
    };
    console.log(request);
    this.quoteRequestForm.disable();
  }
}
