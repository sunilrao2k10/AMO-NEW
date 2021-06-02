import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine-demand-request',
  templateUrl: './engine-demand-request.component.html',
  styleUrls: ['./engine-demand-request.component.scss']
})
export class EngineDemandRequestComponent implements OnInit {
  @Input() engineDemandRequest: any;
  constructor() { }

  ngOnInit(): void {
  }

}
