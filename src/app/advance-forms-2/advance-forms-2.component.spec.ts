import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceForms2Component } from './advance-forms-2.component';

describe('AdvanceForms2Component', () => {
  let component: AdvanceForms2Component;
  let fixture: ComponentFixture<AdvanceForms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceForms2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
