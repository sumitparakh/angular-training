import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorCompsComponent } from './decorator-comps.component';

describe('DecoratorCompsComponent', () => {
  let component: DecoratorCompsComponent;
  let fixture: ComponentFixture<DecoratorCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorCompsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
