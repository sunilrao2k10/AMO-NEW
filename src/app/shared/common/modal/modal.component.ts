import { Router } from '@angular/router';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('closeModal', { static: false}) closeModal: ElementRef;
  @Input() modalInputData: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void{
    this.closeModal.nativeElement.click();
    // if (this.modalInputData.type === 'send'){
    //   this.router.navigate(['/used-engine'], { queryParams: { quoteID: '1111'}});
    // }
  }

}
