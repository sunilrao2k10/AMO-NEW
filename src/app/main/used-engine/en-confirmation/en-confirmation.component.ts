import { GlobalService } from 'src/app/global.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-en-confirmation',
  templateUrl: './en-confirmation.component.html',
  styleUrls: ['./en-confirmation.component.scss']
})
export class ENConfirmationComponent implements OnInit {
  data = null;
  ENConfirmationUpdated: any;
  // @Input() ENConfirmation: any;
  // tslint:disable-next-line:variable-name
  private _ENConfirmation: any;
  @Input() get ENConfirmation(): any { return this._ENConfirmation; }
  set ENConfirmation(input: any){
    if (this._ENConfirmation !== input) {
      this.ENConfirmationUpdated = input;
      // this.updateForm();
    }
  }
  modalInputData = {
    title: 'Approve',
    type: 'form'
  };
  roleName = '';
  showModal = false;
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.roleDataSource$.subscribe((data: any) => this.roleName = data);
  }

  /* For Date picker */
  onChange(result: any): void {
    console.log('onChange: ', result);
  }

  sendBack(event: any): void{
    const value = event.target.value;
    this.modalInputData.title = value;
    this.modalInputData.type = 'sendback';
    this.showModal =  true ;
  }

  submit(): void{

  }
}
