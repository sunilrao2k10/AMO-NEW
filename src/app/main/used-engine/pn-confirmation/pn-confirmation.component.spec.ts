import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNConfirmationComponent } from './pn-confirmation.component';

describe('PNConfirmationComponent', () => {
  let component: PNConfirmationComponent;
  let fixture: ComponentFixture<PNConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PNConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PNConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
