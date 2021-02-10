import { TemplateRef } from '@angular/core';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DefaultChangeDetectionComponent } from './default-change-detection/default-change-detection.component';
import { HomeComponent } from './home/home.component';
import { LazyRoutingModule } from './lazy-routing/lazy-routing.module';

type IComponent =
  | typeof HomeComponent
  | typeof DefaultChangeDetectionComponent
  | typeof ChangeDetectionComponent;

export interface IRouting {
  label?: string;
  path: string;
  component?: IComponent;
  loadChildren?(): Promise<typeof LazyRoutingModule>;
}
export const Routing: IRouting[] = [
  {
    label: 'Home',
    path: '',
    component: HomeComponent,
  },
  {
    label: 'Change Detection - Best Practices',
    path: 'change-detection',
    component: ChangeDetectionComponent,
  },
  {
    label: 'Default Change Detection - Demo',
    path: 'default-change-detection',
    component: DefaultChangeDetectionComponent,
  },
  {
    label: 'Lazy Loading',
    loadChildren: () =>
      import('./lazy-routing/lazy-routing.module').then(
        (m) => m.LazyRoutingModule
      ),
    path: 'lazy-loading',
  },
  {
    label: 'Template Expressions',
    loadChildren: () =>
      import('./template-expressions/template-expressions.module').then(
        (m) => m.TemplateExpressionsModule
      ),
    path: 'template-expressions',
  },
  {
    label: 'Ng For Optimization',
    loadChildren: () =>
      import('./ng-for-optimization/ng-for-optimization.module').then(
        (m) => m.NgForOptimizationModule
      ),
    path: 'ng-for-optimization',
  },
  {
    label: 'NgRx Demo',
    loadChildren: () =>
      import('./ngrx-demo/ngrx-demo.module').then((m) => m.NgrxDemoModule),
    path: 'ngrx-demo',
  },
  {
    label: 'Advance Forms',
    loadChildren: () =>
      import('./advance-forms-2/advance-forms-2.module').then(
        (m) => m.AdvanceForms2Module
      ),
    path: 'advance-forms',
  },
  {
    label: 'Decorator Demos',
    loadChildren: () =>
      import('./decorator-comps/decorator-comps.module').then(
        (m) => m.DecoratorCompsModule
      ),
    path: 'decorator-demos',
  }
];
