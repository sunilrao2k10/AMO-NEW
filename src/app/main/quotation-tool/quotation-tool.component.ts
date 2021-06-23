import { Component, OnInit } from '@angular/core';
import {UtilService} from '../../shared/services/util.service';
@Component({
  selector: 'app-quotation-tool',
  templateUrl: './quotation-tool.component.html',
  styleUrls: ['./quotation-tool.component.scss']
})
export class QuotationToolComponent implements OnInit {
  calculationDone:boolean=false;
  amount:number=1234;
  constructor(private utilService:UtilService) { }
  calculate(){
    this.calculationDone=true;
  }
  save(){
    this.utilService.quotationCalculated = true;
    this.utilService.saveQuotationDetail.next(this.amount);
   
  }
  ngOnInit(): void {
  }

}
