import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  @Input() billing: any;
  constructor() { }

  ngOnInit(): void {
  }

}
