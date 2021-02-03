import { NgModule } from '@angular/core';
import { FirstNamePipe } from './first-name.pipe';
import { SquareRootPipe } from './square-root.pipe';

@NgModule({
  declarations: [FirstNamePipe, SquareRootPipe],
  exports: [SquareRootPipe, FirstNamePipe],
})
export class PipesModule {}
