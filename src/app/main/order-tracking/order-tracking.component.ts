import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import * as XLSX from 'xlsx';
interface Person {
  PO: number;
  SO: string;
  channel: string;
  dateRequiredAt: string;
  site: string;
  ESN: string;
  status: string;
}

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
})
export class OrderTrackingComponent implements OnInit {
  orderTrakingType: any = 'orderTracking';
  /*name of the excel-file which will be downloaded. */
  fileName = 'ExcelSheet.xlsx';

  listOfData: Person[] = [
    {
      PO: 1000,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'pending'
    },
    {
      PO: 1111,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'approved'
    },
    {
      PO: 2222,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'send'
    },
    {
      PO: 3333,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'reject'
    },
    {
      PO: 4444,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'billed'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCheckStatus(data: any): void {
    this.router.navigate(['/used-engine'], { queryParams: { quoteID: data.PO } });
  }


  exportexcel(): void {
    /* table id is passed over here */
    const element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

}

