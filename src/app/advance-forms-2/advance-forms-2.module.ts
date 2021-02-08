import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceForms2RoutingModule } from './advance-forms-2-routing.module';
import { AdvanceForms2Component } from './advance-forms-2.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdvanceForms2Component],
  imports: [
    CommonModule,
    AdvanceForms2RoutingModule,
    ReactiveFormsModule
  ]
})
export class AdvanceForms2Module { }
