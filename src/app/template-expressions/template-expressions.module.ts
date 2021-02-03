import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../core/pipes/pipes.module';
import { TemplateExpressionsComponent } from './template-expressions.component';

@NgModule({
  declarations: [TemplateExpressionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TemplateExpressionsComponent,
      },
    ]),
    PipesModule,
  ],
})
export class TemplateExpressionsModule {}
