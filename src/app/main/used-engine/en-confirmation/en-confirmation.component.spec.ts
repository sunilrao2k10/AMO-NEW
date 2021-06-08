import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENConfirmationComponent } from './en-confirmation.component';

describe('PNConfirmationComponent', () => {
  let component: ENConfirmationComponent;
  let fixture: ComponentFixture<ENConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
