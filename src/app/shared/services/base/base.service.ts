import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  roleUrl =  'assets/mock-json/quote-request.json';
  quoteId =  'assets/mock-json/quoteID.json';
  quoteIdData = 'assets/mock-json/quoteIDCollection.json';
  quoteIdDataShiped = 'assets/mock-json/quoteIdDataShiped.json';
  requestSendFeedback = 'assets/mock-json/requestorSendFeedback.json';
  providerSendFeedback = 'assets/mock-json/providerSendFeedback.json';
  requestorRejectFeedback = 'assets/mock-json/requestorRejectFeedback.json';
  providerRejectFeedback = 'assets/mock-json/providerRejectFeedback.json';
  requestorApproved = 'assets/mock-json/requestorApproved.json';
  providerApproved = 'assets/mock-json/providerApproved.json';
  providerPending = 'assets/mock-json/providerPending.json';
  requestorPending = 'assets/mock-json/requestorPending.json';
  pendingProviderQuotationMsg = 'assets/mock-json/pendingProviderQuotationMsg.json';

  constructor(private http: HttpClient) { }

  get(url: any): Observable<any>{
    return this.http.get(url);
  }

  selectedRole(): Observable<any>{
    return this.get(this.roleUrl);
  }

  selectedQuteID(): Observable<any> {
    return this.get(this.quoteId);
  }

  quoteIDData(): Observable<any> {
    return this.get(this.quoteIdData);
  }

  quoteIDDataShiped(value?: any): Observable<any>{
    if (value === 'approve'){
      return this.get(this.requestorApproved);
    }
    if (value === 'approveProvider'){
      return this.get(this.providerApproved);
    }
    if (value === 'pending'){
      return this.get(this.requestorPending);
    }
    if (value === 'pendingProvider'){
      return this.get(this.providerPending);
    }
    if (value === 'pendingProviderQuotationMsg'){
      return this.get(this.pendingProviderQuotationMsg);
    }
    if (value === 'send'){
      return this.get(this.requestSendFeedback);
    }
    if (value === 'sendProvider'){
      return this.get(this.providerSendFeedback);
    }
    if (value === 'reject'){
      return this.get(this.requestorRejectFeedback);
    }
    if (value === 'rejectProvider'){
      return this.get(this.providerRejectFeedback);
    }
    return this.get(this.quoteIdDataShiped);
  }

}
