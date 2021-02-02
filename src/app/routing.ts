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
];
