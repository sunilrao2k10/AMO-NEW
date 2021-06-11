import { GlobalService } from 'src/app/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

}

