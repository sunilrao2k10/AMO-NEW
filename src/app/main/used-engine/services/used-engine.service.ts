import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsedEngineService {

  constructor() { }

  usedEngineCase(panelName: any[], data: any): any[]{
    let panels: any[] = [];
    const response = data.data;
    if (data && response.role === 'requestor'){
      if (response.quoteState === 'pending' || response.quoteState === 'sendback'){
        panels = panelName.map((item: any) => {
          item.active = item.code === 'QR' ? true : false;
          item.disabled = item.code === 'QR' ? false : true;
          return item;
        });
      } else if (response.quoteState === 'reject'){
        panels = panelName.map((item: any) => {
          item.active = item.code === 'QI' ? true : false;
          item.disabled = item.code === 'QR' || item.code === 'QI' ? false : true;
          return item;
        });
      } else if (response.quoteState === 'approve'){
        panels = panelName.map((item: any) => {
          item.active = item.code === 'EDR' ? true : false;
          item.disabled = item.code === 'QR' || item.code === 'QI' || item.code === 'EDR' ? false : true;
          return item;
        });
      }
    }
    if (data && response.role === 'provider'){
      if (response.quoteState === 'approve'){
        panels = panelName.map((item: any) => {
          item.active = item.code === 'EDR' ? true : false;
          item.disabled = item.code === 'QR' || item.code === 'QI' || item.code === 'EDR' ? false : true;
          return item;
        });
      } else if (response.quoteState === 'pending'){
        panels = panelName.map((item: any) => {
          item.active = item.code === 'QI' ? true : false;
          item.disabled = item.code === 'QR' || item.code === 'QI' ? false : true;
          return item;
        });
      } else {
        panels = panelName.map((item: any) => {
          item.active = item.code === 'QI' ? true : false;
          item.disabled = item.code === 'QR' || item.code === 'QI' ? false : true;
          return item;
        });
      }
    }
    return panels;
  }

}
