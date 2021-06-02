import { GlobalService } from './../../../global.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation-calculation',
  templateUrl: './quotation-calculation.component.html',
  styleUrls: ['./quotation-calculation.component.scss']
})
export class QuotationCalculationComponent implements OnInit {
  showAmount = false;
  quoteID: any;
  constructor(
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.globalService.quoteIDSource$.subscribe((data: void) => this.quoteID = data);
  }
  submit(value: string): void{
    if (value === 'calculate'){
      this.showAmount = true;
    }
    if (value === 'save'){
      this.router.navigate(['/used-engine'], { queryParams: { quoteID: this.quoteID} });
    }
  }
}
