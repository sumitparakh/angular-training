import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IJson } from './core/types';
import { Routing, IRouting } from './routing';

const routes: Routes = Routing.map((route) => {
  const config: IRouting = {
    path: route.path,
  };

  if (route.component) {
    config.component = route.component;
  }

  if (route.loadChildren) {
    config.loadChildren = route.loadChildren;
  }

  return config;
  return {
    path: route.path,
    component: route.component,
  };
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
