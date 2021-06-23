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
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  listOfData: Person[] = [
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
      PO: 1000,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'pending'
    },
    {
      PO: 2222,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'sendBack'
    },
    {
      PO: 1111,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'approved'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onCheckStatus(data: any): void {
    this.router.navigate(['/used-engine'], { queryParams: { quoteID: data.PO } });
  }
}
