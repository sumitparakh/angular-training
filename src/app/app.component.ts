import { Component } from '@angular/core';
import { Routing } from './routing';

interface IMenu {
  label: string;
  path: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menus: IMenu[] = Routing;
}
