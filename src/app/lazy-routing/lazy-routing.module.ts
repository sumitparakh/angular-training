import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingComponentComponent } from './lazy-routing-component/lazy-routing-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LazyRoutingComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyRoutingComponentComponent,
      },
    ]),
  ],
})
export class LazyRoutingModule {}
