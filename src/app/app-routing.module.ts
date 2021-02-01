import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Routing } from './routing';

const routes: Routes = Routing.map((route) => {
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
