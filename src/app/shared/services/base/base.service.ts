import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  default = 'assets/mock-json/default.json';
  roleUrl = 'assets/mock-json/quote-request.json';
  quoteId = 'assets/mock-json/quoteID.json';
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
  erc = 'assets/mock-json/erc.json';
  OTsendback = 'assets/mock-json/OTSendOrder.json';
  constructor(private http: HttpClient) { }

  /**
   * Post data to server
   * @method post
   */
  post(url: string, data: any, option: any = {}, loader: boolean = true): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.post(url, data, { ...option, headers })
      .pipe(map((res: any) => {
        return res;
      }))
      .pipe(catchError(this.handleError));
  }

  /**
   * Get data from server
   * @method get
   */
  get(url: string, loader: boolean = true, options = {}): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    options = { options, headers };
    return this.http.get(url, options)
      .pipe(map((res: any) => {
        return res;
      }))
      .pipe(catchError(this.handleError));
  }

  /**
   * Error handler callback
   * @method handleError
   */
   public handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  exportexcel(tableId: string, fileName: string): void {
    /* table id is passed over here */
    const element = document.getElementById(tableId);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, fileName);
  }



  selectedQuteID(): Observable<any> {
    return this.get(this.quoteId);
  }

  quoteIDData(): Observable<any> {
    return this.get(this.quoteIdData);
  }

  quoteIDDataShiped(value?: any): Observable<any> {
    if (value === 'default') {
      return this.get(this.default);
    }
    if (value === 'approve') {
      return this.get(this.requestorApproved);
    }
    if (value === 'approveProvider') {
      return this.get(this.providerApproved);
    }
    if (value === 'pending') {
      return this.get(this.requestorPending);
    }
    if (value === 'pendingProvider') {
      return this.get(this.providerPending);
    }
    if (value === 'pendingProviderQuotationMsg') {
      return this.get(this.pendingProviderQuotationMsg);
    }
    if (value === 'send') {
      return this.get(this.requestSendFeedback);
    }
    if (value === 'sendProvider') {
      return this.get(this.providerSendFeedback);
    }
    if (value === 'reject') {
      return this.get(this.requestorRejectFeedback);
    }
    if (value === 'rejectProvider') {
      return this.get(this.providerRejectFeedback);
    }
    if (value === 'ercJson') {
      return this.get(this.erc);
    }
    if (value === 'OTsendback') {
      return this.get(this.OTsendback);
    }
    return this.get(this.quoteIdDataShiped);
  }

}
