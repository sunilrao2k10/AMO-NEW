import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteIssueComponent } from './quote-issue.component';

describe('QuoteIssueComponent', () => {
  let component: QuoteIssueComponent;
  let fixture: ComponentFixture<QuoteIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
