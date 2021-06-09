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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(value: any): void{
    console.log(this.providerComment);
    this.formData.emit(this.providerComment);
    this.closeModal.nativeElement.click();
    // this.providerComment;
    // if (this.modalInputData.type === 'send'){
    //   this.router.navigate(['/used-engine'], { queryParams: { quoteID: '1111'}});
    // }
  }

}
