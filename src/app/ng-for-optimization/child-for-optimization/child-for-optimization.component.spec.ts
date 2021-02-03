import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForOptimizationComponent } from './child-for-optimization.component';

describe('ChildForOptimizationComponent', () => {
  let component: ChildForOptimizationComponent;
  let fixture: ComponentFixture<ChildForOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildForOptimizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildForOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
