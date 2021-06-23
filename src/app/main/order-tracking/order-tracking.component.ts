import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
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

  listOfData: Person[] = [
    {
      PO: 5555,
      SO: '91221',
      channel: 'GE',
      dateRequiredAt: '12-03-2021',
      site: 'ABC',
      ESN: '1122',
      status: 'pending'
    },
    {
      PO: 4444,
      SO: '912',
      channel: 'GE',
      dateRequiredAt: '12-03-2021',
      site: 'ABC',
      ESN: '1122',
      status: 'approved'
    },
    {
      PO: 6666,
      SO: '91',
      channel: 'GE',
      dateRequiredAt: '12-03-2021',
      site: 'ABC',
      ESN: '1122',
      status: 'send'
    },
    {
      PO: 3333,
      SO: '1221',
      channel: 'BH',
      dateRequiredAt: '12-03-2021',
      site: 'ABC',
      ESN: '1122',
      status: 'reject'
    },
    {
      PO: 4444,
      SO: '221',
      channel: 'GE',
      dateRequiredAt: '12-03-2021',
      site: 'ABC',
      ESN: '1122',
      status: 'billed'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCheckStatus(data: any): void {
    this.router.navigate(['/used-engine'], { queryParams: { quoteID: data.PO } });
  }

}

