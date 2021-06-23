import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  roleSelected =new Subject();
  getQuoteStatus= new Subject();
  sendQuoteStatus = new Subject(); 
  actionPerformed = new Subject();
  rejectActionType:boolean=false;
  saveQuotationDetail= new Subject();
  quotationCalculated:boolean = false;
  currentRole:any='';
  constructor() { }
  
}
