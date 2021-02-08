import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvanceForms2Component } from '../advance-forms-2/advance-forms-2.component';

const routes: Routes = [
  {
    path: '',
    component: AdvanceForms2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceForms2RoutingModule { }
