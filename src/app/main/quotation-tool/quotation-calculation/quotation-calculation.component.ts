import { BaseService } from './../../../shared/services/base/base.service';
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
  quoteIdList: any[] = [];
  selectedQuoteID = 'Select Quote ID';
  constructor(
    private baseService: BaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.quoteIdCollection();
  }

  quoteIdCollection(): void{
    this.baseService.selectedQuteID().subscribe(data => {
      this.quoteIdList = data.quoteIdCollection;
    });
  }

  submit(value: string): void{
    if (value === 'calculate'){
      this.showAmount = true;
    }
    if (value === 'save'){
      this.router.navigate(['/used-engine'], { queryParams: { quoteID: this.selectedQuoteID} });
    }
  }
}
