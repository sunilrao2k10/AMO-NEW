import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-en-confirmation',
  templateUrl: './en-confirmation.component.html',
  styleUrls: ['./en-confirmation.component.scss']
})
export class ENConfirmationComponent implements OnInit {
  @Input() ENConfirmation: any;
  constructor() { }

  ngOnInit(): void {
  }

}
