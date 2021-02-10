import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoratorCompsComponent } from './decorator-comps.component';

const routes: Routes = [
  {
    path: '',
    component: DecoratorCompsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorCompsRoutingModule { }
