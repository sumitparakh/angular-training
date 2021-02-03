import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOptimizationComponent } from './ng-for-optimization.component';
import { RouterModule } from '@angular/router';
import { ChildForOptimizationComponent } from './child-for-optimization/child-for-optimization.component';

@NgModule({
  declarations: [NgForOptimizationComponent, ChildForOptimizationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NgForOptimizationComponent,
      },
      {
        path: 'child',
        component: ChildForOptimizationComponent,
      },
    ]),
  ],
})
export class NgForOptimizationModule {}
