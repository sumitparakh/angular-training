import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRoutingComponentComponent } from './lazy-routing-component.component';

describe('LazyRoutingComponentComponent', () => {
  let component: LazyRoutingComponentComponent;
  let fixture: ComponentFixture<LazyRoutingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyRoutingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRoutingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
