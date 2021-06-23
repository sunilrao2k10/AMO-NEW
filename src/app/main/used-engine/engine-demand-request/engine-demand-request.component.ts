import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/global.service';
import { BaseService } from 'src/app/shared';
import { Utility } from 'src/app/shared/functions/utility';

@Component({
  selector: 'app-engine-demand-request',
  templateUrl: './engine-demand-request.component.html',
  styleUrls: ['./engine-demand-request.component.scss']
})
export class EngineDemandRequestComponent implements OnInit {
  // @Input() engineDemandRequest: any;
  // tslint:disable-next-line:variable-name
  private _engineDemandRequest: any;
  engineDemandRequestUpdated: any;
  @Input() get engineDemandRequest(): any { return this._engineDemandRequest; }
  set engineDemandRequest(input: any){
    if (this._engineDemandRequest !== input) {
      this.engineDemandRequestUpdated = input;
      this.updateForm();
    }
  }
  engineDemandRequestItem: any = {};
  date = null;
  isEnglish = false;
  roleName = '';
  providerComment = '';
  showModal = false;
  selectedQuoteID = null;
  engineDemandRequestForm: FormGroup;
  formControls: any;
  constructor(
    private fb: FormBuilder,
    private baseService: BaseService,
    private globalService: GlobalService,
    ) { }

  ngOnInit(): void {
    this.globalService.roleDataSource$.subscribe((data: any) => this.roleName = data);
    this.initializeForm();
  }

  updateForm(): void{
    const EDRequest = this.engineDemandRequestUpdated.engineDemandRequest;
    if (!Utility.isEmptyObj(EDRequest)){
      const status = this.engineDemandRequestUpdated.quoteState;
      this.engineDemandRequestItem = this.engineDemandRequestUpdated.engineDemandRequest;
      this.updateFormData(this.engineDemandRequestItem);
      if ( status === 'approve' || status === 'reject' || status === 'sendback' || status === 'erc'){
        this.engineDemandRequestForm.disable();
      } else {
        this.engineDemandRequestForm.enable();
      }
    } else if (this.engineDemandRequestForm) {
      this.engineDemandRequestForm.reset();
      this.engineDemandRequestForm.enable();
    }

  }

  disableForm(): void{
    const control = Object.keys(this.engineDemandRequestForm.controls);
    for (const item of control){
      this.engineDemandRequestForm.controls[item].disable();
    }
  }

  enableForm(): void{
    const control = Object.keys(this.engineDemandRequestForm.controls);
    for (const item of control){
      this.engineDemandRequestForm.controls[item].enable();
    }
  }

  updateFormData(value: any): void{
    this.engineDemandRequestForm.patchValue(value);
  }

  /**
   * Method to define Engin Demand request form group
   * @method initializeForm
   */
   initializeForm(): void {
    this.engineDemandRequestForm = this.fb.group({
      requestor: ['', [Validators.required]],
      channel: ['', [Validators.required]],
      CSAorTX: ['', [Validators.required]],
      quoteIDNoReference: ['', [Validators.required]],
      productLine: ['', [Validators.required]],
      modelNumber: ['', [Validators.required]],
      typeOfTransaction: ['', [Validators.required]],
      buybackESN: ['', [Validators.required]],
      dateBuybackwillReturnfromSite: ['', [Validators.required]],
      buybackTimeSinceNew: ['', [Validators.required]],
      buybackStartstimeSinceNew: ['', [Validators.required]],
      buybacktimeSinceLastMajorOverhaul: ['', [Validators.required]],
      buybacktimeSinceLastHotSection: ['', [Validators.required]],
      buybackStartSinceLastHotSection: ['', [Validators.required]],
      endCustomerName: ['', [Validators.required]],
      shipToAddress: ['', [Validators.required]],
      responsibleServiceManagerName: ['', [Validators.required]],
      customerContactName: ['', [Validators.required]],
      customerContactPhoneNumber: ['', [Validators.required]],
      customsBrokerName: ['', [Validators.required]],
      customsBrokerPhoneNumber: ['', [Validators.required]],
      incoterms: ['', [Validators.required]],
      po: ['', [Validators.required]],
      attachPO: ['', [Validators.required]],
      sellPriceofEngineChannelCustomer: ['', [Validators.required]],
      plannedOutageDate: ['', [Validators.required]],
      dateRequiredSite: ['', [Validators.required]],
      containerPurchased: ['', [Validators.required]],
      softRideKitNeeded: ['', [Validators.required]],
      specialInstructions: ['', [Validators.required]],
    });
    this.formControls = this.engineDemandRequestForm.controls;
  }

  submit(): void{
    console.log(this.engineDemandRequestForm.value);
  }

}
