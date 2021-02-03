import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExpressionsComponent } from './template-expressions.component';

describe('TemplateExpressionsComponent', () => {
  let component: TemplateExpressionsComponent;
  let fixture: ComponentFixture<TemplateExpressionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateExpressionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
