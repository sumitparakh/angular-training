import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvanceFormsComponent } from './advance-forms.component';

const routes: Routes = [
  {
    path: '',
    component: AdvanceFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvanceFormsRoutingModule {}
