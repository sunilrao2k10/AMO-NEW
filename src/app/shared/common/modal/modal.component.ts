import { Router } from '@angular/router';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('closeModal', { static: false}) closeModal: ElementRef;
  @Input() modalInputData: any;
  @Output() formData = new EventEmitter();
  providerComment = '';
  isExisting = false;
  isModify = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(value: any): void{
    this.formData.emit(this.providerComment);
    this.closeModal.nativeElement.click();
    // this.providerComment;
    // if (this.modalInputData.type === 'send'){
    //   this.router.navigate(['/used-engine'], { queryParams: { quoteID: '1111'}});
    // }
  }

  checkAction(event: any): void{
    const value = event.target.value;
    if (value === 'Add Columns'){
      this.isExisting = true;
      this.isModify = false;
    } else if (value === 'Modify Columns'){
      this.isModify = true;
      this.isExisting = false;
    }
  }

}
