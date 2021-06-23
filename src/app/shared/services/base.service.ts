import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { Observable,  throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseurl = '';
  
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders(),
  };
  getQuoteDetail(quote: any = ''): Observable<any> {
    if(quote=='1' || quote=='5')
    return this.http.get("../../../assets/mockData/quoteIssue.json");
    if(quote=='2')
    return this.http.get("../../../assets/mockData/quoteRequestOpen.json");
    if(quote=='3')
    return this.http.get("../../../assets/mockData/edr.json");
    if(quote=='4')
    return this.http.get("../../../assets/mockData/pnc.json");
    if(quote=='11')
    return this.http.get("../../../assets/mockData/biller.json");
    return this.http
    .get<any>(this.baseurl + "/getQuoteDetail")
    .pipe(
      map((resp) => {
        if (resp.Error) {
          throwError(resp.Error);
        } else {
          return resp;
        }
      })
    );
  }
  getAvailableQuotes(role: any = '',sso:string = ''): Observable<any> {
    return this.http.get("../../../assets/mockData/availableQuotes.json");
    return this.http
    .get<any>(this.baseurl + "/getAvailableQuotes")
    .pipe(
      map((resp) => {
        if (resp.Error) {
          throwError(resp.Error);
        } else {
          return resp;
        }
      })
    );
  }
  getQuoteStatusData(status:string = ''): Observable<any> {
    if(status==='approve')
    return this.http.get("../../../assets/mockData/quoteApproveResponse.json");
    else if(status==='reject')
    return this.http.get("../../../assets/mockData/quoteRejectResponse.json");
    else if(status==='sendBack')
    return this.http.get("../../../assets/mockData/quoteSendBackResponse.json");
    return this.http
    .get<any>(this.baseurl + "/getQuoteStatusData")
    .pipe(
      map((resp) => {
        if (resp.Error) {
          throwError(resp.Error);
        } else {
          return resp;
        }
      }))
  }
  getTrackOrderDetails(role: any = '',type:string = ''): Observable<any> {
    if(role === 'requestor' && type=='orderTracking')
    return this.http.get("../../../assets/mockData/requestorOrderTrackOrderData.json");
    if(role === 'requestor' && type=='quotes')
    return this.http.get("../../../assets/mockData/requestorQuoteTrackOrderData.json");
    if(role === 'provider' && type=='orderTracking')
    return this.http.get("../../../assets/mockData/providerOrderTrackOrderData.json");
    if(role === 'provider' && type=='quotes')
    return this.http.get("../../../assets/mockData/providerQuoteTrackOrderData.json");
    if(role === 'biller')
    return this.http.get("../../../assets/mockData/billerQuoteTrackOrderData.json");
    return this.http
    .get<any>(this.baseurl + "/getTrackOrder")
    .pipe(
      map((resp) => {
        if (resp.Error) {
          throwError(resp.Error);
        } else {
          return resp;
        }
      })
    );
  }
}
