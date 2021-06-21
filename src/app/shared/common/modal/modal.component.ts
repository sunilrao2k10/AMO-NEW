import { Router } from '@angular/router';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('closeModal', { static: false }) closeModal: ElementRef;
  @Input() modalInputData: any;
  @Output() formData = new EventEmitter();
  dataManagmentRowForm: FormGroup;
  dataManagementRowFields: any;
  formControls: any;
  providerComment = '';
  isExisting = false;
  isModify = false;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.modalInputData.formFields){
      this.dataManagementRowFields = Object.keys(this.modalInputData.formFields);
      this.initializeForm();
    }
  }

  submit(value: any): void {
    this.formData.emit(this.providerComment);
    this.closeModal.nativeElement.click();
    // this.providerComment;
    // if (this.modalInputData.type === 'send'){
    //   this.router.navigate(['/used-engine'], { queryParams: { quoteID: '1111'}});
    // }
  }

  /**
   * Method to define Data management new row info form group
   * @method initializeForm
   */
  initializeForm(): void {
    this.dataManagmentRowForm = this.fb.group(this.updateKeysAndValues());
    this.formControls = this.dataManagmentRowForm.controls;
  }

  updateKeysAndValues(): { [key: string]: any; } {
    const output = this.dataManagementRowFields.reduce((accum: any, value: string) => {
      accum[value] = ['', [Validators.required]];
      return accum;
    }, {});
    return output as FormControl;
  }


  checkAction(event: any): void {
    const value = event.target.value;
    if (value === 'Add Columns') {
      this.isExisting = true;
      this.isModify = false;
    } else if (value === 'Modify Columns') {
      this.isModify = true;
      this.isExisting = false;
    }
  }

}
