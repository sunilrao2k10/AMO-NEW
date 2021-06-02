import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pn-confirmation',
  templateUrl: './pn-confirmation.component.html',
  styleUrls: ['./pn-confirmation.component.scss']
})
export class PNConfirmationComponent implements OnInit {
  @Input() pnConfirmation: any;
  constructor() { }

  ngOnInit(): void {
  }

}
