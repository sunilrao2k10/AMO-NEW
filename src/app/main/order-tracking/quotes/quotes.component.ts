import { Component, OnInit } from '@angular/core';
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
      PO: 1111,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'shipped'
    },
    {
      PO: 2222,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'pending'
    },
    {
      PO: 3333,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'pending'
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
  constructor() { }

  ngOnInit(): void {
  }

}
