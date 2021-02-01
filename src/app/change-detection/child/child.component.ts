import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cd-child',
  templateUrl: 'child.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildCdComponent implements DoCheck {
  @Input()
  name = '';

  ngDoCheck(): void {
    console.log('Child::DoCheck');
  }
}
