import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForOptimizationComponent } from './ng-for-optimization.component';

describe('NgForOptimizationComponent', () => {
  let component: NgForOptimizationComponent;
  let fixture: ComponentFixture<NgForOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForOptimizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
