import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFormsComponent } from './advance-forms.component';

describe('AdvanceFormsComponent', () => {
  let component: AdvanceFormsComponent;
  let fixture: ComponentFixture<AdvanceFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
