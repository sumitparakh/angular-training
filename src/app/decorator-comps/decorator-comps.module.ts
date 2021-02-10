import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorCompsRoutingModule } from './decorator-comps-routing.module';
import { DecoratorCompsComponent } from './decorator-comps.component';
import { Demo1Component } from './demo-1/demo-1.component';


@NgModule({
  declarations: [DecoratorCompsComponent, Demo1Component],
  imports: [
    CommonModule,
    DecoratorCompsRoutingModule
  ]
})
export class DecoratorCompsModule { }
