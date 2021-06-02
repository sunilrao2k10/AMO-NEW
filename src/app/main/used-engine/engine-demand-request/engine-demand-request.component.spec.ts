import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineDemandRequestComponent } from './engine-demand-request.component';

describe('EngineDemandRequestComponent', () => {
  let component: EngineDemandRequestComponent;
  let fixture: ComponentFixture<EngineDemandRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineDemandRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineDemandRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
