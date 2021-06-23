import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedEngineComponent } from './used-engine.component';

describe('UsedEngineComponent', () => {
  let component: UsedEngineComponent;
  let fixture: ComponentFixture<UsedEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
