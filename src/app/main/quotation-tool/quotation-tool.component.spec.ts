import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationToolComponent } from './quotation-tool.component';

describe('QuotationToolComponent', () => {
  let component: QuotationToolComponent;
  let fixture: ComponentFixture<QuotationToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
