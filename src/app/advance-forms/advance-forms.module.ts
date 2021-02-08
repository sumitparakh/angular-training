import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceFormsRoutingModule } from './advance-forms-routing.module';
import { AdvanceFormsComponent } from './advance-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdvanceFormsComponent],
  imports: [
    CommonModule,
    AdvanceFormsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdvanceFormsModule { }
